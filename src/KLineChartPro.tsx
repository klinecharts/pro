/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, createSignal, createEffect, onMount, JSX, Show } from 'solid-js'

import { KLineData, Nullable, Chart, init, registerOverlay } from 'klinecharts'

import overlays from './extension'

import { PeriodBar, DrawingBar, IndicatorModal, TimezoneModal, ScreenshotModal } from './widget'

import { translateTimezone } from './widget/timezone-modal/data'

// @ts-expect-error
import styles from './index.less'
import { SelectDataSourceItem } from './component'

export type NetworkState = 'pending' | 'ok' | 'error'

export type LoadData = (
  params: { symbol: string, period: string, timestamp: Nullable<number> },
  success: (dataList: KLineData[], more: boolean) => void,
  error: () => void
) => void
export type UpdateData = (
  params: { symbol: string, period: string },
  callback: (data: KLineData) => void
) => void

export interface KLineChartProProps {
  class: string
  style?: JSX.CSSProperties
  locale: string
  networkState: NetworkState
  symbol: string
  defaultPeriod: string
  periods: string[]
  timezone: string
  defaultMainIndicators: string[]
  defaultSubIndicators: string[]
  loadData?: LoadData
  updateData?: UpdateData
}

overlays.forEach(o => { registerOverlay(o) })

const KLineChartPro: Component<KLineChartProProps> = (props) => {
  let widgetRef: HTMLDivElement | undefined = undefined
  let widget: Nullable<Chart> = null
  let loading = false
  const [currentPeriod, setCurrentPeriod] = createSignal(props.defaultPeriod)
  const [indicatorModalVisible, setIndicatorModalVisible] = createSignal(false)
  const [mainIndicators, setMainIndicators] = createSignal([...(props.defaultMainIndicators)])
  const [subIndicators, setSubIndicators] = createSignal({})

  const [timezoneModalVisible, setTimezoneModalVisible] = createSignal(false)
  const [innerTimezone, setInnerTimezone] = createSignal<SelectDataSourceItem>({ key: props.timezone, text: translateTimezone(props.timezone, props.locale) })

  const [settingModalVisible, setSettingModalVisible] = createSignal(false)

  const [screenshotUrl, setScreenshotUrl] = createSignal('')

  onMount(() => {
    widget = init(widgetRef!)
    mainIndicators().forEach(indicator => {
      widget?.createIndicator(indicator, true, { id: 'candle_pane' })
    })
    const subIndicatorMap = {}
    props.defaultSubIndicators.forEach(indicator => {
      const paneId = widget?.createIndicator(indicator, true)
      if (paneId) {
        // @ts-expect-error
        subIndicatorMap[indicator] = paneId
      }
    })
    setSubIndicators(subIndicatorMap)
    widget?.loadMore(timestamp => {
      loading = true
      props.loadData?.(
        { symbol: props.symbol, period: currentPeriod(), timestamp },
        (dataList, more) => {
          widget?.applyMoreData(dataList, more)
          loading = false
        },
        () => { loading = false }
      )
    })
  })

  createEffect(() => {
    const period = currentPeriod()
    if (props.networkState === 'ok' && !loading) {
      const symbol = props.symbol
      loading = true
      props.loadData?.(
        { symbol, period, timestamp: null },
        (dataList, more) => {
          widget?.applyNewData(dataList, more)
          props.updateData?.({ symbol, period }, data => {
            widget?.updateData(data)
          })
          loading = false
        },
        () => { loading = false }
      )
    }
  })

  createEffect(() => {
    setInnerTimezone({ key: props.timezone, text: translateTimezone(props.timezone, props.locale) })
  })

  return (
    <div
      style={props.style}
      class={`klinecharts-pro ${props.class}`}>
      <style>{styles}</style>
      <Show when={indicatorModalVisible()}>
        <IndicatorModal
          locale={props.locale}
          mainIndicators={mainIndicators()}
          subIndicators={subIndicators()}
          onClose={() => { setIndicatorModalVisible(false) }}
          onMainIndicatorChange={data => {
            const newMainIndicators = [...mainIndicators()]
            if (data.added) {
              widget?.createIndicator(data.name, true, { id: 'candle_pane' })
              newMainIndicators.push(data.name)
            } else {
              widget?.removeIndicator('candle_pane', data.name)
              newMainIndicators.splice(newMainIndicators.indexOf(data.name), 1);
            }
            setMainIndicators(newMainIndicators)
          }}
          onSubIndicatorChange={data => {
            const newSubIndicators = { ...subIndicators() }
            if (data.added) {
              const paneId = widget?.createIndicator(data.name)
              if (paneId) {
                // @ts-expect-error
                newSubIndicators[data.name] = paneId
              }
            } else {
              if (data.paneId) {
                widget?.removeIndicator(data.paneId, data.name)
                // @ts-expect-error
                delete newSubIndicators[data.name]
              }
            }
            setSubIndicators(newSubIndicators)
          }}/>
      </Show>
      <Show when={timezoneModalVisible()}>
        <TimezoneModal
          locale={props.locale}
          timezone={innerTimezone()}
          onClose={() => { setTimezoneModalVisible(false) }}
          onConfirm={timezone => { setInnerTimezone(timezone) }}
        />
      </Show>
      <Show when={screenshotUrl().length > 0}>
        <ScreenshotModal
          locale={props.locale}
          url={screenshotUrl()}
          onClose={() => { setScreenshotUrl('') }}
        />
      </Show>
      <PeriodBar
        locale={props.locale}
        period={currentPeriod()}
        periods={props.periods}
        onPeriodChange={setCurrentPeriod}
        onIndicatorClick={() => { setIndicatorModalVisible((visible => !visible)) }}
        onTimezoneClick={() => { setTimezoneModalVisible((visible => !visible)) }}
        onSettingClick={() => { setSettingModalVisible((visible => !visible)) }}
        onScreenshotClick={() => {
          if (widget) {
            const url = widget.getConvertPictureUrl()
            setScreenshotUrl(url)
          }
        }}
      />
      <div class="klinecharts-pro-content">
        <DrawingBar/>
        <div ref={widgetRef} class='klinecharts-pro-widget'></div>
      </div>
    </div>
  )
}

export default KLineChartPro