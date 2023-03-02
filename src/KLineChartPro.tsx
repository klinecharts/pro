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

import { Component, createSignal, createEffect, onMount, JSX } from 'solid-js'

import { KLineData, Nullable, Chart, init } from 'klinecharts'

import PeriodBar from './widget/period-bar'
import DrawingBar from './widget/drawing-bar'

// @ts-expect-error
import styles from './index.less'

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
  networkState: NetworkState
  symbol: string
  defaultPeriod: string
  periods: string[]
  defaultMainIndicators: string[]
  defaultSubIndicators: string[]
  loadData?: LoadData
  updateData?: UpdateData
}

const KLineChartPro: Component<KLineChartProProps> = (props) => {
  let widgetRef: HTMLDivElement | undefined = undefined
  let widget: Nullable<Chart> = null
  let loading = false
  const [currentPeriod, setCurrentPeriod] = createSignal(props.defaultPeriod)
  const [mainIndicators, setMainIndicators] = createSignal([...(props.defaultMainIndicators)])
  const [subIndicators, subMainIndicators] = createSignal([...(props.defaultSubIndicators)])

  onMount(() => {
    widget = init(widgetRef!)
    mainIndicators().forEach(indicator => {
      widget?.createIndicator(indicator, true, { id: 'candle_pane' })
    })
    subIndicators().forEach(indicator => {
      widget?.createIndicator(indicator, true)
    })
    widget?.loadMore(timestamp => {
      loading = true
      props.loadData?.(
        { symbol: props.symbol, period: currentPeriod(), timestamp },
        (dataList, more) => {
          widget?.applyMoreData(dataList, more)
          loading = false
        },
        ()=> { loading = false }
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

  return (
    <div
      style={props.style}
      class={`klinecharts-pro ${props.class}`}>
      <style>{styles}</style>
      <PeriodBar
        period={currentPeriod()}
        periods={props.periods}
        onPeriodChange={setCurrentPeriod}/>
      <div class="klinecharts-pro-content">
        <DrawingBar/>
        <div ref={widgetRef} class='klinecharts-pro-widget'></div>
      </div>
    </div>
  )
}

export default KLineChartPro