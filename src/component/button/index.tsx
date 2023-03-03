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

import { ParentComponent, ParentProps, JSX } from 'solid-js'

export type ButtonType = 'confirm' | 'cancel'

export interface ButtonProps extends ParentProps {
  class?: string
  style?: JSX.CSSProperties | string
  type?: ButtonType
  onClick?: () => void
}

const Button: ParentComponent<ButtonProps> = props => {
  return (
    <button
      style={props.style}
      class={`klinecharts-pro-button ${props.type ?? 'confirm'} ${props.class?? ''}`}
      onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button
