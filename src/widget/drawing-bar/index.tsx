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

import { Component, createMemo, createSignal } from 'solid-js'
import { List } from '../../component'
import {
  createSingleLineOptions, createMoreLineOptions,
  createPolygonOptions, createFibonacciOptions, createWaveOptions,
  Icon
} from './icons'

import xabcd from './icons/xabcd'

// interface OverlayItem {
//   icon: string
//   list: SelectDataSourceItem[]
//   setter: Setter<string>
// }

export interface DrawingBarProps {
  locale: string
  onDrawingItemClick: (name: string) => void
}

const DrawingBar: Component<DrawingBarProps> = props => {
  const [currentSingleLine, setCurrentSingleLine] = createSignal('horizontalStraightLine')
  const [currentMoreLine, setCurrentMoreLine] = createSignal('priceChannelLine')
  const [currentPolygon, setCurrentPolygon] = createSignal('circle')
  const [currentFibonacci, setCurrentFibonacci] = createSignal('fibonacciLine')
  const [currentWave, setCurrentWave] = createSignal('xabcd')

  const [popoverKey, setPopoverKey] = createSignal('')

  const overlays = createMemo(() => {
    return [
      { key: 'singleLine', icon: currentSingleLine(), list: createSingleLineOptions(props.locale), setter: setCurrentSingleLine },
      { key: 'moreLine', icon: currentMoreLine(), list: createMoreLineOptions(props.locale), setter: setCurrentMoreLine },
      { key: 'polygon', icon: currentPolygon(), list: createPolygonOptions(props.locale), setter: setCurrentPolygon },
      { key: 'fibonacci', icon: currentFibonacci(), list: createFibonacciOptions(props.locale), setter: setCurrentFibonacci },
      { key: 'wave', icon: currentWave(), list: createWaveOptions(props.locale), setter: setCurrentWave }
    ]
  })
  return (
    <div
      class="klinecharts-pro-drawing-bar">
      {
        overlays().map(item => (
          <div
            class="item"
            tabIndex={0}
            onBlur={() => { setPopoverKey('') }}>
            <span
              onClick={() => { props.onDrawingItemClick(item.icon) }}>
              <Icon name={item.icon} />
            </span>
            <div
              class="icon-arrow"
              onClick={() => {
                if (item.key === popoverKey()) {
                  setPopoverKey('')
                } else {
                  setPopoverKey(item.key)
                }
              }}>
              <svg
                class={item.key === popoverKey() ? 'rotate' : ''}
                viewBox="0 0 4 6">
                <path d="M1.07298,0.159458C0.827521,-0.0531526,0.429553,-0.0531526,0.184094,0.159458C-0.0613648,0.372068,-0.0613648,0.716778,0.184094,0.929388L2.61275,3.03303L0.260362,5.07061C0.0149035,5.28322,0.0149035,5.62793,0.260362,5.84054C0.505822,6.05315,0.903789,6.05315,1.14925,5.84054L3.81591,3.53075C4.01812,3.3556,4.05374,3.0908,3.92279,2.88406C3.93219,2.73496,3.87113,2.58315,3.73964,2.46925L1.07298,0.159458Z" stroke="none" stroke-opacity="0"/>
              </svg>
            </div>
            {
              item.key === popoverKey() && (
                <List class="list">
                  {
                    item.list.map(data => (
                      <li
                        onClick={() => {
                          item.setter(data.key)
                          props.onDrawingItemClick(data.key)
                        }}>
                        <Icon name={data.key}/>
                        <span style="padding-left:8px">{data.text}</span>
                      </li>
                    ))
                  }
                </List>
              )
            }
          </div>
        ))
      }
    </div>
  )
}

export default DrawingBar