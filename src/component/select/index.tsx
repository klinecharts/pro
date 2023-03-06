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

import { createSignal, Component, JSX } from 'solid-js'

export interface SelectDataSourceItem {
  key: string
  text: JSX.Element
}

export interface SelectProps {
  class?: string
  style?: JSX.CSSProperties | string
  value?: JSX.Element
  valueKey?: string
  dataSource?: SelectDataSourceItem[] | string[]
  onSelected?: (data: SelectDataSourceItem | string) => void
}

const Select: Component<SelectProps> = props => {
  const [open, setOpen] = createSignal(false)

  return (
    <div
      style={props.style}
      class={`klinecharts-pro-select ${props.class ?? ''} ${open() ? 'klinecharts-pro-select-show' : ''}`}
      tabIndex="0"
      onClick={_ => { setOpen(o => !o) }}
      onBlur={_ => { setOpen(false) }}>
      <div
        class="selector-container">
        <span class="value">{props.value}</span>
        <i class="arrow"/>
      </div>
      {
        (props.dataSource && props.dataSource.length > 0) &&
        <div
          class="drop-down-container">
          <ul>
            {
              props.dataSource.map(data => {
                const d = data as SelectDataSourceItem
                // @ts-expect-error
                const v = d[props.valueKey ?? 'text'] ?? data
                return (
                  <li
                    onClick={e => {
                      e.stopPropagation()
                      if (props.value !== v) {
                        props.onSelected?.(data)
                      }
                      setOpen(false)
                    }}>
                    {v}
                  </li>
                )
              })
            }
          </ul>
        </div>
      }
    </div>
  )
}

export default Select
