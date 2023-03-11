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

import { Component, createSignal, createResource, Show } from 'solid-js'

import { Modal, List, Input } from '../../component'

import i18n from '../../i18n'

import { SymbolInfo, Datafeed } from '../../types'

export interface SymbolSearchModalProps {
  locale: string
  datafeed: Datafeed
  onSymbolSelected: (symbol: SymbolInfo) => void
  onClose: () => void
}

const SymbolSearchModal: Component<SymbolSearchModalProps> = props => {
  const [value, setValue] = createSignal('')

  const [symbolList] = createResource(value, props.datafeed.searchSymbols.bind(props.datafeed))

  return (
    <Modal
      title={i18n('symbol_search', props.locale)}
      width={460}
      onClose={props.onClose}>
      <Input
        class="klinecharts-pro-symbol-search-modal-input"
        placeholder={i18n('symbol_code', props.locale)}
        suffix={
          <svg viewBox="0 0 1024 1024">
            <path d="M945.066667 898.133333l-189.866667-189.866666c55.466667-64 87.466667-149.333333 87.466667-241.066667 0-204.8-168.533333-373.333333-373.333334-373.333333S96 264.533333 96 469.333333 264.533333 842.666667 469.333333 842.666667c91.733333 0 174.933333-34.133333 241.066667-87.466667l189.866667 189.866667c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c8.533333-12.8 8.533333-34.133333-2.133333-46.933334zM469.333333 778.666667C298.666667 778.666667 160 640 160 469.333333S298.666667 160 469.333333 160 778.666667 298.666667 778.666667 469.333333 640 778.666667 469.333333 778.666667z"/>
          </svg>
        }
        value={value()}
        onChange={v => {
          const va = `${v}`
          setValue(va)
        }}/>
      <List
        class="klinecharts-pro-symbol-search-modal-list"
        loading={symbolList.loading}
        dataSource={symbolList() ?? []}
        renderItem={(symbol: SymbolInfo) => (
          <li
            onClick={() => {
              props.onSymbolSelected(symbol)
              props.onClose()
            }}>
            <div>
              <Show when={symbol.logo}>
                <img alt="symbol" src={symbol.logo}/>
              </Show>
              <span title={symbol.name ?? ''}>{symbol.shortName ?? symbol.ticker}{`${symbol.name ? `(${symbol.name})` : ''}`}</span>
            </div>
            {symbol.exchange ?? ''}
          </li>
        )}>
      </List>
    </Modal>
  )
}

export default SymbolSearchModal
