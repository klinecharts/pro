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

import { Component, onMount } from 'solid-js'

export interface PeriodBarProps {
  period: string
  periods: string[]
  onPeriodChange: (period: string) => void
}

const PeriodBar: Component<PeriodBarProps> = (props) => {
  return (
    <div
      class="klinecharts-pro-period-bar">
      <div class='logo-container'></div>
      {
        props.periods.map(p => (
          <span
            class={`item period ${p === props.period ? 'selected' : ''}`}
            onClick={() => { props.onPeriodChange(p) }}>
            {p}
          </span>
        ))
      }
      <div
        class='item tools'>
        <span class='icon-indicator icon'/>
        <span>指标</span>
      </div>
      <div
        class='item tools'>
        <span class='icon-timezone icon'/>
        <span>时区</span>
      </div>
      <div
        class='item tools'>
        <span class='icon-setting icon'/>
        <span>设置</span>
      </div>
      <div
        class='item tools'>
        <span class='icon-screenshot icon'/>
        <span>截屏</span>
      </div>

      <div></div>
      <div></div>
    </div>
  )
}

export default PeriodBar
