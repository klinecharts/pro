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

import { JSX, Component, mergeProps, Show, createSignal, createEffect } from 'solid-js'

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
  focus?: boolean
  onChange?: (v: string | number) => void
  onKeyDown?: (event: KeyboardEvent) => void
}
export const [inputClass, setInputClass] = createSignal<string>('klinecharts-pro-input klinecharts-pro-timeframe-modal-input')

const Input: Component<InputProps> = p => {
  const props = mergeProps({ min: Number.MIN_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER }, p)
  let input: HTMLInputElement|undefined

  const [status, setStatus] = createSignal('normal')
  const focusInput = (element: HTMLInputElement | null) => {
    if (element) {
      element.focus();
    }
  };

  createEffect(() => {
    focusInput(document.querySelector("#myInput"));
  });

  return (
    <div
      style={props.style}
      class={`${inputClass()}${props.class ?? ''}`}
      data-status={status()}
      onClick={() => { input?.focus() }}>
      <Show when={props.prefix}>
        <span class="prefix">{props.prefix}</span>
      </Show>  
      <input
        id="myInput"
        ref={input}
        class="value"
        placeholder={props.placeholder ?? ''}
        value={props.value}
        autofocus={props.focus === true ? props.focus : false}
        onFocus={() => { setStatus('focus') }}
        onBlur={() => { setStatus('normal') }}
        onChange={(e) => {
          const v = (e.target as HTMLInputElement).value
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
        }}
        onKeyDown={props.onKeyDown}/>
      <Show when={props.suffix}>
        <span class="suffix">{props.suffix}</span>
      </Show>  
    </div>
  )
}

export default Input
