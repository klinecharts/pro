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

import { JSX, Component, mergeProps, Show, createSignal } from 'solid-js'

export interface InputProps {
  class?: string
  style?: JSX.CSSProperties
  prefix?: JSX.Element
  suffix?: JSX.Element
  precision?: number
  min?: number
  max?: number
  placeholder?: string
  value: string | number
  disabled?: boolean
  onChange?: (v: string | number) => void 
}

const Input: Component<InputProps> = p => {
  const props = mergeProps({ min: Number.MIN_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER }, p)
  let input: HTMLInputElement

  const [status, setStatus] = createSignal('normal')

  return (
    <div
      style={props.style}
      class={`klinecharts-pro-input ${props.class ?? ''}`}
      data-status={status()}
      onClick={() => { input?.focus() }}>
      <Show when={props.prefix}>
        <span class="prefix">{props.prefix}</span>
      </Show>  
      <input
        ref={(el) => { input = el }}
        class="value"
        placeholder={props.placeholder ?? ''}
        value={props.value}
        onFocus={() => { setStatus('focus') }}
        onBlur={() => { setStatus('normal') }}
        onChange={(e) => {
          // @ts-expect-error
          const v = e.target.value
          if ('precision' in props) {
            let reg
            const decimalDigit = Math.max(0, Math.floor(props.precision!))
            if (decimalDigit <= 0) {
              reg = new RegExp(/^[1-9]\d*$/)
            } else {
              reg = new RegExp('^\\d+\\.?\\d{0,' + decimalDigit + '}$')
            }
            if (v === '' || (reg.test(v) && +v >= props.min && +v <= props.max)) {
              props.onChange?.(v === '' ? v : +v)
            }
          } else {
            props.onChange?.(v)
          }
        }}/>
      <Show when={props.suffix}>
        <span class="suffix">{props.suffix}</span>
      </Show>  
    </div>
  )
}

export default Input
