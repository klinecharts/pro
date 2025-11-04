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

import { Component, createEffect, For, createSignal } from 'solid-js'
import { Styles, utils, DeepPartial } from 'klinecharts'

import lodashSet from 'lodash/set'

import { Modal, Select, Switch, Color } from '../../component'
import type { SelectDataSourceItem } from '../../component'

import i18n from '../../i18n'
import { getOptions } from './data'
import { ChartObjType } from '../../types'
// import { chartsession, chartsessionCtr } from '../../ChartProComponent'
import { setChartModified } from '../../store/chartStateStore'

export interface SettingModalProps {
  locale: string
  currentStyles: Styles
  onClose: () => void
  onChange: (style: DeepPartial<Styles>) => void
  onRestoreDefault: (options: SelectDataSourceItem[]) => void
}

const SettingModal: Component<SettingModalProps> = props => {
  const [styles, setStyles] = createSignal(props.currentStyles)
  const [options, setOptions] = createSignal(getOptions(props.locale))
  const [currentSetting, setCurrentSetting] = createSignal('candle')

  let stylee: DeepPartial<Styles> = {}

  createEffect(() => {
    setOptions(getOptions(props.locale))
  })

  const update = (option: SelectDataSourceItem, newValue: any) => {
    const chartStateObj = localStorage.getItem(`chartstatedata`)
    let chartObj: ChartObjType
    if (chartStateObj) {
      chartObj = (JSON.parse(chartStateObj) as ChartObjType)
      chartObj.styleObj = chartObj.styleObj ?? {}
    } else {
      chartObj = {
        styleObj: {}
      }
    }
    
    lodashSet(chartObj.styleObj!, option.key, newValue)
    localStorage.setItem(`chartstatedata`, JSON.stringify(chartObj))
    setChartModified(true)
    const style = {}
    lodashSet(style, option.key, newValue)
    lodashSet(style, option.key, newValue)
    const ss = utils.clone(styles())
    lodashSet(ss, option.key, newValue)
    setStyles(ss)
    setOptions(options().map(op => ({ ...op })))
    props.onChange(style)
  }

  const restoreDefault = () => {
    const chartStateObj = localStorage.getItem(`chartstatedata`)
    let chartObj: ChartObjType
    if (chartStateObj) {
      chartObj = (JSON.parse(chartStateObj) as ChartObjType)
      if (chartObj.styleObj)
        chartObj.styleObj = {}
      
      localStorage.setItem(`chartstatedata`, JSON.stringify(chartObj))
    }
    props.onRestoreDefault(options())
    props.onClose()
  }

  const settingsButton = [
    {text: 'Candle', key: 'candle'},
    {text: 'Indicator', key: 'indicator'},
    {text: 'Grid', key: 'grid'},
    {text: 'X-axis', key: 'xAxis'},
    {text: 'Y-axis', key: 'yAxis'},
    {text: 'Separator', key: 'separator'},
    {text: 'Crosshair', key: 'crosshair'},
    {text: 'Overlay', key: 'overlay'},
  ]

  return (
    <Modal
      title={i18n('setting', props.locale)}
      buttons={[
        {
          children: i18n('restore_default', props.locale),
          onClick: () => {
            restoreDefault()
          }
        }
      ]}
      onClose={props.onClose}
    >
      <div class="klinecharts-pro-setting-modal-content">
          <div class='sidebar'>
            {
              settingsButton.map(el => (
                <button class={`${currentSetting() == el.key ? 'selected' : ''}`}
                  onclick={() => setCurrentSetting(el.key)}
                >{el.text}</button>
              ))
            }
          </div>
          <div class='content'>
            <For each={options().filter(el => el.key.includes(currentSetting()))}>
              {
                option => {
                  let component
                  const value = utils.formatValue(styles(), option.key)
                  switch (option.component) {
                    case 'select': {
                      component = (
                        <Select
                          style={{ width: '120px' }}
                          value={i18n(value as string, props.locale)}
                          ///@ts-expect-error
                          dataSource={option.dataSource}
                          onSelected={(data) => {
                            const newValue = (data as SelectDataSourceItem).key
                            update(option, newValue)
                          }}/>
                      )
                      break
                    }
                    case 'switch': {
                      const open = !!value
                      component = (
                        <Switch
                          open={open}
                          onChange={() => {
                            const newValue = !open
                            update(option, newValue)
                          }}/>
                      )
                      break
                    }
                    case 'color': {
                      component = (
                        <Color 
                          style={{ width: '120px' }}
                          value={value as any}
                          reactiveChange={false}
                          onChange={(el) => {
                            const newValue = el
                            update(option, newValue)
                          }}  
                        />
                      )
                      break
                    }
                  }
                  return (
                    <>
                      <div class="component">
                        <span>{option.text}</span>
                        {component}
                      </div>
                      
                    </>
                  )
                }
              }
            </For>
          </div>
      </div> 
    </Modal>
  )
}

export default SettingModal
