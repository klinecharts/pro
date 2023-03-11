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
import { Styles, utils, DeepPartial } from 'klinecharts'

import lodashSet from 'lodash/set'

import { Modal, Select, Switch } from '../../component'
import type { SelectDataSourceItem } from '../../component'

import i18n from '../../i18n'
import { getOptions } from './data'

export interface SettingModalProps {
  locale: string
  currentStyles: Styles
  onClose: () => void
  onChange: (style: DeepPartial<Styles>) => void
  onRestoreDefault: (key: string) => void
}

const SettingModal: Component<SettingModalProps> = props => {
  const [styles, setStyles] = createSignal(props.currentStyles)

  const options = createMemo(() => {
    return getOptions(props.locale)    
  })

  return (
    <Modal
      title={i18n('setting', props.locale)}
      width={560}
      buttons={[
        {
          children: i18n('restore_default', props.locale),
          onClick: () => {
            props.onRestoreDefault('')
            props.onClose()
          }
        }
      ]}
      onClose={props.onClose}>
      <div
        class="klinecharts-pro-setting-modal-content">
        {
          options().map(option => {
            let component
            const value = utils.formatValue(styles(), option.key)
            switch (option.component) {
              case 'select': {
                component = (
                  <Select
                    style={{ width: '120px' }}
                    value={i18n(value as string, props.locale)}
                    dataSource={option.dataSource}
                    onSelected={(data) => {
                      const newValue = (data as SelectDataSourceItem).key
                      const style = {}
                      lodashSet(style, option.key, newValue)
                      const ss = utils.clone(styles())
                      lodashSet(ss, option.key, newValue)
                      setStyles(ss)
                      props.onChange(style)
                    }}/>
                )
                break
              }
              case 'switch': {
                const open = !!value
                console.log(1111111)
                component = (
                  <Switch
                    open={open}
                    onChange={() => {
                      const newValue = !open
                      const style = {}
                      lodashSet(style, option.key, newValue)
                      const ss = utils.clone(styles())
                      lodashSet(ss, option.key, newValue)
                      setStyles(ss)
                      console.log(ss)
                      console.log(style)
                      props.onChange(style)
                    }}/>
                )
                break
              }
            }
            return (
              <>
                <span>{option.text}</span>
                {component}
              </>
            )
          })
        }
      </div> 
    </Modal>
  )
}

export default SettingModal
