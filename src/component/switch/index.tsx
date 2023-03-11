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

import { Component, JSX } from 'solid-js'

export interface SwitchProps {
  class?: string
  style?: JSX.CSSProperties | string
  open: boolean
  onChange: () => void
}

const Switch: Component<SwitchProps> = props => {
  return (
    <div
      style={props.style}
      class={`klinecharts-pro-switch ${props.open ? 'turn-on' : 'turn-off'} ${props.class ?? ''}`}
      onClick={_ => {
        props.onChange && props.onChange()
      }}>
      <i
        class="thumb"/>
    </div>
  )
}

export default Switch
