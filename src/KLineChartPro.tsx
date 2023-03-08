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

import { createSignal, createEffect, onMount, JSX, Show, onCleanup, startTransition } from 'solid-js'

import { ComponentType } from 'solid-element'

import {
  KLineData, Nullable, Chart, init, registerOverlay, OverlayMode,
  TooltipIconPosition, ActionType, PaneOptions, Indicator, dispose
} from 'klinecharts'

import overlays from './extension'
import { SelectDataSourceItem, Loading } from './component'

import { PeriodBar, DrawingBar, IndicatorModal, TimezoneModal, ScreenshotModal, IndicatorSettingModal } from './widget'

import { translateTimezone } from './widget/timezone-modal/data'

// @ts-expect-error
import styles from './index.less'

export type NetworkState = 'pending' | 'ok' | 'error'

export interface LoadDataEventDetail {
  symbol: string
  period: string
  timestamp: Nullable<number>
  successCallback: (dataList: KLineData[], more: boolean) => void
  errorCallback: () => void
}

export interface UpdateDataEventDetail {
  symbol: string
  period: string
  callback: (data: KLineData) => void
}

export interface KLineChartProProps {
  class: string
  style?: JSX.CSSProperties
  theme: string
  locale: string
  networkState: NetworkState
  defaultSymbol: string 
  symbol?: string
  defaultPeriod: string
  period?: string
  periods: string[]
  defaultTimezone: string
  timezone?: string
  defaultMainIndicators: string[]
  defaultSubIndicators: string[]
}

overlays.forEach(o => { registerOverlay(o) })

function createIndicator (widget: Nullable<Chart>, indicatorName: string, isStack?: boolean, paneOptions?: PaneOptions): Nullable<string> {
  if (indicatorName === 'VOL') {
    paneOptions = { gap: { bottom: 2 }, ...paneOptions }
  }
  return widget?.createIndicator({
    name: indicatorName,
    // @ts-expect-error
    createTooltipDataSource: ({ indicator, defaultStyles }) => {
      const icons = []
      if (indicator.visible) {
        icons.push(defaultStyles.tooltip.icons[1])
        icons.push(defaultStyles.tooltip.icons[2])
        icons.push(defaultStyles.tooltip.icons[3])
      } else {
        icons.push(defaultStyles.tooltip.icons[0])
        icons.push(defaultStyles.tooltip.icons[2])
        icons.push(defaultStyles.tooltip.icons[3])
      }
      return { icons }
    }
  }, isStack, paneOptions) ?? null
}

const KLineChartPro: ComponentType<KLineChartProProps> = (props, componentOptions) => {
  let widgetRef: HTMLDivElement | undefined = undefined
  let widget: Nullable<Chart> = null
  let loading = false

  const [loadingVisible, setLoadingVisible] = createSignal(false)
  const [currentSymbol, setCurrentSymbol] = createSignal(props.symbol ?? props.defaultSymbol)
  const [currentPeriod, setCurrentPeriod] = createSignal(props.period ?? props.defaultPeriod)
  const [indicatorModalVisible, setIndicatorModalVisible] = createSignal(false)
  const [mainIndicators, setMainIndicators] = createSignal([...(props.defaultMainIndicators!)])
  const [subIndicators, setSubIndicators] = createSignal({})

  const [timezoneModalVisible, setTimezoneModalVisible] = createSignal(false)
  const [currentTimezone, setCurrentTimezone] = createSignal<SelectDataSourceItem>({ key: props.timezone ?? props.defaultTimezone, text: translateTimezone(props.defaultTimezone ?? props.timezone ?? 'Asia/Shanghai', props.locale!) })

  const [settingModalVisible, setSettingModalVisible] = createSignal(false)

  const [screenshotUrl, setScreenshotUrl] = createSignal('')

  const [drawingBarVisible, setDrawingBarVisible] = createSignal(true)

  const [indicatorSettingModalParams, setIndicatorSettingModalParams] = createSignal({
    visible: false, indicatorName: '', paneId: '', calcParams: [] as Array<any>
  })

  onMount(() => {
    widget = init(widgetRef!)
    mainIndicators().forEach(indicator => {
      createIndicator(widget, indicator, true, { id: 'candle_pane' })
    })
    const subIndicatorMap = {}
    props.defaultSubIndicators!.forEach(indicator => {
      const paneId = createIndicator(widget, indicator, true)
      if (paneId) {
        // @ts-expect-error
        subIndicatorMap[indicator] = paneId
      }
    })
    setSubIndicators(subIndicatorMap)
    widget?.loadMore(timestamp => {
      loading = true
      componentOptions.element.dispatchEvent(
        new CustomEvent<LoadDataEventDetail>(
          'loadData',
          {
            detail: {
              symbol: currentSymbol(),
              period: currentPeriod(),
              timestamp,
              successCallback: (dataList: KLineData[], more: boolean) => {
                widget?.applyMoreData(dataList, more)
                loading = false
              },
              errorCallback: () => {
                loading = false
              }
            },
          }
        )
      )
    })
    widget?.subscribeAction(ActionType.OnTooltipIconClick, (data) => {
      if (data.indicatorName) {
        switch (data.iconId) {
          case 'visible': {
            widget?.overrideIndicator({ name: data.indicatorName, visible: true }, data.paneId)
            break
          }
          case 'invisible': {
            widget?.overrideIndicator({ name: data.indicatorName, visible: false }, data.paneId)
            break
          }
          case 'setting': {
            const indicator = widget?.getIndicatorByPaneId(data.paneId, data.indicatorName) as Indicator
            setIndicatorSettingModalParams({
              visible: true, indicatorName: data.indicatorName, paneId: data.paneId, calcParams: indicator.calcParams
            })
            break
          }
          case 'close': {
            if (data.paneId === 'candle_pane') {
              const newMainIndicators = [...mainIndicators()]
              widget?.removeIndicator('candle_pane', data.indicatorName)
              newMainIndicators.splice(newMainIndicators.indexOf(data.indicatorName), 1)
              setMainIndicators(newMainIndicators)
            } else {
              const newIndicators = { ...subIndicators() }
              widget?.removeIndicator(data.paneId, data.indicatorName)
              // @ts-expect-error
              delete newIndicators[data.indicatorName]
              setSubIndicators(newIndicators)
            }
          }
        }
      }
    })
  })

  onCleanup(() => {
    dispose(widgetRef!)
  })

  createEffect(() => {
    const period = currentPeriod()
    const symbol = currentSymbol()
    if (props.networkState === 'ok' && !loading && symbol) {
      loading = true
      setLoadingVisible(true)
      componentOptions.element.dispatchEvent(
        new CustomEvent<LoadDataEventDetail>(
          'loadData',
          {
            detail: {
              symbol,
              period,
              timestamp: null,
              successCallback: (dataList: KLineData[], more: boolean) => {
                widget?.applyNewData(dataList, more)
                componentOptions.element.dispatchEvent(
                  new CustomEvent<UpdateDataEventDetail>(
                    'updateData',
                    {
                      detail: {
                        symbol,
                        period,
                        callback: (data: KLineData) => {
                          widget?.updateData(data)
                        }
                      }
                    }
                  )
                )
                loading = false
                setLoadingVisible(false)
              },
              errorCallback: () => {
                loading = false
                setLoadingVisible(false)
              }
            }
          }
        )
      )
    }
  })

  createEffect(() => {
    widget?.setStyles(props.theme)
    const color = props.theme === 'dark' ? '#929AA5' : '#76808F'
    widget?.setStyles({
      indicator: {
        tooltip: {
          icons: [
            {
              id: 'visible',
              position: TooltipIconPosition.Middle,
              marginLeft: 8,
              marginTop: 7,
              marginRight: 0,
              marginBottom: 0,
              paddingLeft: 0,
              paddingTop: 0,
              paddingRight: 0,
              paddingBottom: 0,
              icon: '\ue903',
              fontFamily: 'icomoon',
              size: 14,
              color: color,
              activeColor: color,
              backgroundColor: 'transparent',
              activeBackgroundColor: 'rgba(22, 119, 255, 0.15)'
            },
            {
              id: 'invisible',
              position: TooltipIconPosition.Middle,
              marginLeft: 8,
              marginTop: 7,
              marginRight: 0,
              marginBottom: 0,
              paddingLeft: 0,
              paddingTop: 0,
              paddingRight: 0,
              paddingBottom: 0,
              icon: '\ue901',
              fontFamily: 'icomoon',
              size: 14,
              color: color,
              activeColor: color,
              backgroundColor: 'transparent',
              activeBackgroundColor: 'rgba(22, 119, 255, 0.15)'
            },
            {
              id: 'setting',
              position: TooltipIconPosition.Middle,
              marginLeft: 6,
              marginTop: 7,
              marginBottom: 0,
              marginRight: 0,
              paddingLeft: 0,
              paddingTop: 0,
              paddingRight: 0,
              paddingBottom: 0,
              icon: '\ue902',
              fontFamily: 'icomoon',
              size: 14,
              color: color,
              activeColor: color,
              backgroundColor: 'transparent',
              activeBackgroundColor: 'rgba(22, 119, 255, 0.15)'
            },
            {
              id: 'close',
              position: TooltipIconPosition.Middle,
              marginLeft: 6,
              marginTop: 7,
              marginRight: 0,
              marginBottom: 0,
              paddingLeft: 0,
              paddingTop: 0,
              paddingRight: 0,
              paddingBottom: 0,
              icon: '\ue900',
              fontFamily: 'icomoon',
              size: 14,
              color: color,
              activeColor: color,
              backgroundColor: 'transparent',
              activeBackgroundColor: 'rgba(22, 119, 255, 0.15)'
            }
          ]
        }
      }
    })
  })

  createEffect(() => {
    if (props.timezone) {
      setCurrentTimezone({
        key: props.timezone,
        text: translateTimezone(props.timezone, props.locale!)
      })
    }
  })

  createEffect(() => {
    widget?.setLocale(props.locale)
  })

  createEffect(() => {
    widget?.setTimezone(currentTimezone().key)
  })

  createEffect(()=> {
    if (props.symbol) {
      setCurrentSymbol(props.symbol)
    }
  })

  return (
    <div
      style={props.style}
      class={`klinecharts-pro ${props.class}`}
      data-theme={props.theme}>
      <i class="icon-close klinecharts-pro-load-icon"/>
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
              createIndicator(widget, data.name, true, { id: 'candle_pane' })
              newMainIndicators.push(data.name)
            } else {
              widget?.removeIndicator('candle_pane', data.name)
              newMainIndicators.splice(newMainIndicators.indexOf(data.name), 1)
            }
            setMainIndicators(newMainIndicators)
          }}
          onSubIndicatorChange={data => {
            const newSubIndicators = { ...subIndicators() }
            if (data.added) {
              const paneId = createIndicator(widget, data.name)
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
          timezone={currentTimezone()}
          onClose={() => { setTimezoneModalVisible(false) }}
          onConfirm={timezone => { setCurrentTimezone(timezone) }}
        />
      </Show>
      <Show when={screenshotUrl().length > 0}>
        <ScreenshotModal
          locale={props.locale}
          url={screenshotUrl()}
          onClose={() => { setScreenshotUrl('') }}
        />
      </Show>
      <Show when={indicatorSettingModalParams().visible}>
        <IndicatorSettingModal
          locale={props.locale}
          params={indicatorSettingModalParams()}
          onClose={() => { setIndicatorSettingModalParams({ visible: false, indicatorName: '', paneId: '', calcParams: [] }) }}
          onConfirm={(params)=> {
            const modalParams = indicatorSettingModalParams()
            widget?.overrideIndicator({ name: modalParams.indicatorName, calcParams: params }, modalParams.paneId)
          }}
        />
      </Show>
      <PeriodBar
        locale={props.locale}
        spread={drawingBarVisible()}
        period={currentPeriod()}
        periods={props.periods}
        onMenuClick={async () => {
          try {
            await startTransition(() => setDrawingBarVisible(!drawingBarVisible()))
            widget?.resize()
          } catch (e) {}
          
        }}
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
      <div
        class="klinecharts-pro-content">
        <Show when={loadingVisible()}>
          <Loading/>
        </Show>
        <Show when={drawingBarVisible()}>
          <DrawingBar
            locale={props.locale}
            onDrawingItemClick={overlay => { widget?.createOverlay(overlay) }}
            onModeChange={mode => { widget?.overrideOverlay({ mode: mode as OverlayMode }) }}
            onLockChange={lock => { widget?.overrideOverlay({ lock }) }}
            onVisibleChange={visible => { widget?.overrideOverlay({ visible }) }}
            onRemoveClick={(groupId) => { widget?.removeOverlay({ groupId }) }}/>
        </Show>
        <div
          ref={widgetRef}
          class='klinecharts-pro-widget'
          data-drawing-bar-visible={drawingBarVisible()}/>
      </div>
    </div>
  )
}

export default KLineChartPro