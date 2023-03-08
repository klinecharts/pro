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

import { Component, createSignal, Show } from 'solid-js'

import { Modal, List, Input } from '../../component'

import i18n from '../../i18n'

import { SymbolInfo } from '../../types'

export interface SymbolSearchModalProps {
  locale: string
  onSymbolSelected: (symbol: SymbolInfo) => void
  onClose: () => void
}

const url = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACACAYAAAAs/Ar1AAAAAXNSR0IArs4c6QAACdRJREFUeF7tnd1tHDcQx3mCEUQtWK7DQPJiuYQAKSN6SQqQVYDzopQRICVYflEA1xG5BQWBoQu4e7z9OJLzHy45HO7tAYGSLI9Hcn6c+c/s186s9PN8/+bamJfrYXq7d9Op7kfH7JHdw+lS7D8bc9H9/8ubfzzH17F4uzVMYzC4NfTcuLln6GDZ3a0FjCYhkDU6BVH7UDQDwci931JmqXvcQtGWl1APwfP96w/GSLj53Oi04yHUQtAb3yjf9Sg4ur2DKggOhrcruxLjzyHRCYMKCNZvfN0wVIdgXW4fDQ+unQ7PUA2C8zb+CSx3lzdfrQaq8hGHoJ1UT9oe9byCKATb7ofAEvcKYhBsAEAAHBrJeoXiEGzG5xi/jlYoCsEGwCIA3JeLh4diEGwAZAHgGB4ub57e5+xx3FcRCDYASphr91AKhOwQPN9ffSp/Tr/EIrfQZxnBmBWCDQApkC7e57ygJRsEGwBSAPS/c3nzNZvtsnS0ASALQP9r+TTCYgg2EVgDgOEEVA6xuAiCDYCaABx/e3EdIRmC1gC4uPrBXFz92K3cty8fVVgv4yAWgZAEweFM4KeMkyje1au3v5lXb389/s7L09+m/+ex+7uCTzIIiRC0Vwv47qc/jfUGoc+3L7+vwEukpY5sCFrNBL7/5Qne7P/+cQW31dUwLWNgQdCaDnAGmocCynDtQtDNjB0WYAha1AEpENiwEBOOTmAqF5csEBgQtKcDHAScUPDfXz9HheJYW2jWEZyKIgTBuXgBCw0VCkJAKcw2YG8AQvB6T8VRyeM2xlu3jKR4HD1AhQK0LwokubXCsgUSAo1i0LcbQ66ZEwpyQED1IQcALhKjEGgMA9YD2Lgc+zggbCGIajvuh9rBCFDKIICyBQICfWIQdcncHWdDixWFoQ/6uxRI3HHlaE+JxCAEGr2AXRBkN6YsHLWDEQgokFLGlek7UZEYgUCfFygJAZUaIvBRIGUyaFI3MW/ghUCrF0B2Y9IKdWcWw0UiRIcg6WXq2DJ9L+gNAhDo9AIlIXAL7cv30d/VqAdGAHEh0FUXSKn8Zdo9nYcYn4IO9as5FAxj9tcNTjyB1lBgXbIrEuUycM5+2oDAf3LJA4HOUDA2mIXBfpAdmtPQsb6Uh4Lj0H0CcQKBVi8QW3wtQGg+mTRbvxNtMIOg7SeGudO8tT2E8tBAQaA/FFDuHVXyVD85jmuFYR4Sjp6gxVDgMxR1LWEO43L7UAjDxBusDgKksjevCUiED2UghCA4v1AwVvROT/R/w1clc73AuL0mEMYhYeQJdBaIOIvO1QOxtK5U1kGdo+DMd0nbEwjWogc4oYCzK3MCoehM4zEkdJ5gDRBwvUDqjswRNpSAMIfgvPXAErea6iVSIVwy1ul3hxtVDp6gfQhKhQJ00bkwcMIROgZuO6cLDhC0LQrR8/1ukUoagBOW6p9v6M8q7s5RD5RefLRgVT8krAgCdNGtJ5AQZahnqg9Bf2p5FZ6gth5ILV9LAEnoBAdB22cOOTHYLojU7kO8U30I+gxh1+rzBhzhXAhK6wHOuDYIuPlMoD0nFEguOgKn5Hj8y7cCT4AKsPkCSFwFhISDkqkqusdsraDpcIDsNmoxSgCBjmuDgLIOcJwTCoDuDre6L3+iGTouKZEam3vzngBdbAQAX5sUL4GEAfdbUiIVgKDNkjHqclMB4OoI7n0RGkKBnWPTnoCz43KBMO7H3a6WeiWSBi/QPASlQ0EJcCROYHHH3awnkA4F3IWNta9fG5iO7mwgsAtf6uJRLiAaMoJhzMdiUXvnDjihYCzAuBd+cA1MtdciBpuHgFslDC28NBC6PIDDoFFPwNUDqAp3t73nDhs2FNlH4Op8nP4RgjfXxrw08+4CTmqY6n5zeYnU36fCSsbj/fUEtsPn+3YKRql6IHXhltzprDMEjFficHlZSxCUCgUoIFwPoS0dPJ3nBIJ6l5y7ZxQjhuBAUNIAnHFo9gbzS84/GGNuEUPkbjN27zaGxt5JJB0KYnNFQdCrC05uPqlTK4gt5PwMHrroznASOxARqSU90rINeQJBnQwBNaxLrzjpG5oaLllIBALbv8RY+PMYHmdX9dZ0jnvnTFLKBaOFq5YgENUF6AJyjC99lg6dgz4Ipm9NG3sCUQjQUJACgdSirxACWV1QKhRYaNwFH6XfWIaCLAUlvmGmj7edP8dQ7F1HJSGYLwaVeuKLN22JQKAxOwg+wu5QORQJCcjipRqG+l7KxaO+PtE5SIlUat7D8dO3qHqebSxzHoFbgsUnibdMfY0dqgXsSPRBcPqkcx8EIt5gbCoNQDiD9X8/BklCPYDrQJseIB9wLRkSQquc48FQuC8It3Rhoxeaj91j9u2HU7DS5wX8L9QOvPlEJiRQxuLuOqo/6ePavIAx4EsvNHgDZyzJDCI3IK14ATvvyNvQ6noDjvjKbcCl/ekDoAtk3UOqfHOLQSAuEOdiEX3wtMvFNegJjXUBY/xawK038YbUet4APUMXS8Oksw6dAMS9QDQc1NYGHD1AXTvAASo1FOgFIO4FSAgOIIiVkp0BuFkBpcI5QKVAQEGY0me+74S1ABQOankDDgSUCEP7sv2gGqSvHWi+n+Bo3u7pZBRQUU3gvix9STpn5+aAYNyHE5ehwlBfan5UejPJ3Ny0F4DCQQ1vwBF0OUIBBRK1k5Qej74pfTxmyBPUAGGsD+y/+1w1ZTw0FFAgKTVyZFi0GEyEQPaiE98M53WAHBBQfbQHAJ0SzucEe4Ka3iDVEIi2WCEEcBiAs4O5AZ7v69yjwAUBLTuvKxTwwkAyBAePIF47SIHA3W4e+q7eAg93tq49lg0sCgdDylhfH3CWKZRtrCwUsMPAIk/Qoj7wZRu6K30czPuXV7C+MWrMEoat6oPUxWnje2k6IClFDC1IK0KxDYNyR7kcAPuLizzBoBHayBi4S6y7fR4AskHQa4R6D7rQbaxSo0vLBHyjyeIJBo+wgVDK5NN+8wGQ1RNsIEiYP18IyCoMfVPfxGIJIMoAUMQTbGKxBADL6gDUiLJqgq2OQC130vFFhSDkF4tC0GcNtsS8vzVmf40MaGszWYHiABQNB6deYcsccMB3D8bs7kI3i+D9YC2Le4LxMDbBCBlFZPcXzw5iU93CQxQEcQBEw8EmGvUZ341INBz4awpnrRWq7Py5HapDcKYZxJ2d95JrACB1ATZSAcFQYFp9OqnK+GrCgT9ErA4GlcZXDcHUM9j/arbYpCLmU1FBVTjAUssOCs3VR9W73rfGzUAwLTp1VztfG7N7Vx8IW93bf9Yk9KidrzI74A76tOYgCUX7Rl8lBGFxaY84jzFv5Qsp1sDjT7/Djbl4kKrjL90QKd//H8c0INtdW8SvAAAAAElFTkSuQmCC'

const SymbolSearchModal: Component<SymbolSearchModalProps> = props => {
  const [value, setValue] = createSignal('')
  const [symbolList, setSymbolList] = createSignal([])

  return (
    <Modal
      title={i18n('symbol_search', props.locale)}
      width={400}
      onClose={props.onClose}>
      <Input
        class="klinecharts-pro-symbol-search-modal-input"
        placeholder={i18n('symbol_code', props.locale)}
        prefix={
          <svg viewBox="0 0 1024 1024">
            <path d="M945.066667 898.133333l-189.866667-189.866666c55.466667-64 87.466667-149.333333 87.466667-241.066667 0-204.8-168.533333-373.333333-373.333334-373.333333S96 264.533333 96 469.333333 264.533333 842.666667 469.333333 842.666667c91.733333 0 174.933333-34.133333 241.066667-87.466667l189.866667 189.866667c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c8.533333-12.8 8.533333-34.133333-2.133333-46.933334zM469.333333 778.666667C298.666667 778.666667 160 640 160 469.333333S298.666667 160 469.333333 160 778.666667 298.666667 778.666667 469.333333 640 778.666667 469.333333 778.666667z"/>
          </svg>
        }
        value={value()}
        onChange={v => { setValue(`${v}`) }}/>
      <List
        class="klinecharts-pro-symbol-search-modal-list"
        dataSource={symbolList()}
        renderItem={(symbol: SymbolInfo) => (
          <li
            onClick={() => {
              props.onSymbolSelected(symbol)
              props.onClose()
            }}>
            <div>
              <Show when={symbol.logo}>
                <img src={symbol.logo}/>
              </Show>
              {symbol.name}
            </div>
            {symbol.exchange ?? ''}
          </li>
        )}>
      </List>
    </Modal>
  )
}

export default SymbolSearchModal
