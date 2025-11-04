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

import { OverlayCreate, OverlayMode } from 'klinecharts'

import { List } from '../../component'
import {
  createSingleLineOptions, createMoreLineOptions,
  createPolygonOptions, createFibonacciOptions, createWaveOptions,
  createMagnetOptions,
  Icon
} from './icons'

export interface DrawingBarProps {
  locale: string
  onDrawingItemClick: (value: string | OverlayCreate) => void
  onModeChange: (mode: string) => void,
  onLockChange: (lock: boolean) => void
  onVisibleChange: (visible: boolean) => void
  onRemoveClick: (groupId: string) => void
}

const GROUP_ID = 'drawing_tools'

const DrawingBar: Component<DrawingBarProps> = props => {
  const [singleLineIcon, setSingleLineIcon] = createSignal('horizontalStraightLine')
  const [moreLineIcon, setMoreLineIcon] = createSignal('priceChannelLine')
  const [polygonIcon, setPolygonIcon] = createSignal('circle')
  const [fibonacciIcon, setFibonacciIcon] = createSignal('fibonacciLine')
  const [waveIcon, setWaveIcon] = createSignal('xabcd')

  const [modeIcon, setModeIcon] = createSignal('weak_magnet')
  const [mode, setMode] = createSignal('normal')

  const [lock, setLock] = createSignal(false)

  const [visible, setVisible] = createSignal(true)

  const [popoverKey, setPopoverKey] = createSignal('')

  const overlays = createMemo(() => {
    return [
      { key: 'singleLine', icon: singleLineIcon(), list: createSingleLineOptions(props.locale), setter: setSingleLineIcon },
      { key: 'moreLine', icon: moreLineIcon(), list: createMoreLineOptions(props.locale), setter: setMoreLineIcon },
      { key: 'polygon', icon: polygonIcon(), list: createPolygonOptions(props.locale), setter: setPolygonIcon },
      { key: 'fibonacci', icon: fibonacciIcon(), list: createFibonacciOptions(props.locale), setter: setFibonacciIcon },
      { key: 'wave', icon: waveIcon(), list: createWaveOptions(props.locale), setter: setWaveIcon }
    ]
  })

  const modes = createMemo(() => createMagnetOptions(props.locale))

  return (
    <div
      class="klinecharts-pro-drawing-bar">
      {
        overlays().map(item => (
          <div
            class="item"
            tabIndex={0}
            onBlur={() => { setPopoverKey('') }}>
            <span
              style="width:32px;height:32px"
              onClick={() => { props.onDrawingItemClick({ groupId: GROUP_ID, name: item.icon, visible: visible(), lock: lock(), mode: mode() as OverlayMode }) }}>
              <Icon name={item.icon} />
            </span>
            <div
              class="icon-arrow"
              onClick={() => {
                if (item.key === popoverKey()) {
                  setPopoverKey('')
                } else {
                  setPopoverKey(item.key)
                }
              }}>
              <svg
                class={item.key === popoverKey() ? 'rotate' : ''}
                viewBox="0 0 4 6">
                <path d="M1.07298,0.159458C0.827521,-0.0531526,0.429553,-0.0531526,0.184094,0.159458C-0.0613648,0.372068,-0.0613648,0.716778,0.184094,0.929388L2.61275,3.03303L0.260362,5.07061C0.0149035,5.28322,0.0149035,5.62793,0.260362,5.84054C0.505822,6.05315,0.903789,6.05315,1.14925,5.84054L3.81591,3.53075C4.01812,3.3556,4.05374,3.0908,3.92279,2.88406C3.93219,2.73496,3.87113,2.58315,3.73964,2.46925L1.07298,0.159458Z" stroke="none" stroke-opacity="0"/>
              </svg>
            </div>
            {
              item.key === popoverKey() && (
                <List class="list">
                  {
                    item.list.map(data => (
                      <li
                        onClick={() => {
                          item.setter(data.key)
                          props.onDrawingItemClick({ name: data.key, lock: lock(), mode: mode() as OverlayMode })
                          setPopoverKey('')
                        }}>
                        <Icon name={data.key}/>
                        <span style="padding-left:8px">{data.text}</span>
                      </li>
                    ))
                  }
                </List>
              )
            }
          </div>
        ))
      }
      <span class="split-line"/>
      <div
        class="item"
        tabIndex={0}
        onBlur={() => { setPopoverKey('') }}>
        <span
          style="width:32px;height:32px"
          onClick={() => {
            let currentMode = modeIcon()
            if (mode() !== 'normal') {
              currentMode = 'normal'
            }
            setMode(currentMode)
            props.onModeChange(currentMode)
          }}>
          {
            modeIcon() === 'weak_magnet'
              ? (mode() === 'weak_magnet' ? <Icon name="weak_magnet" class="selected"/> : <Icon name="weak_magnet"/>) 
              : (mode() === 'strong_magnet' ? <Icon name="strong_magnet" class="selected"/> : <Icon name="strong_magnet"/>)
          }
        </span>
        <div
          class="icon-arrow"
          onClick={() => {
            if (popoverKey() === 'mode') {
              setPopoverKey('')
            } else {
              setPopoverKey('mode')
            }
          }}>
          <svg
            class={popoverKey() === 'mode' ? 'rotate' : ''}
            viewBox="0 0 4 6">
            <path d="M1.07298,0.159458C0.827521,-0.0531526,0.429553,-0.0531526,0.184094,0.159458C-0.0613648,0.372068,-0.0613648,0.716778,0.184094,0.929388L2.61275,3.03303L0.260362,5.07061C0.0149035,5.28322,0.0149035,5.62793,0.260362,5.84054C0.505822,6.05315,0.903789,6.05315,1.14925,5.84054L3.81591,3.53075C4.01812,3.3556,4.05374,3.0908,3.92279,2.88406C3.93219,2.73496,3.87113,2.58315,3.73964,2.46925L1.07298,0.159458Z" stroke="none" stroke-opacity="0"/>
          </svg>
        </div>
        {
          popoverKey() === 'mode' && (
            <List class="list">
              {
                modes().map(data => (
                  <li
                    onClick={() => {
                      setModeIcon(data.key)
                      setMode(data.key)
                      props.onModeChange(data.key)
                      setPopoverKey('')
                    }}>
                    <Icon name={data.key}/>
                    <span style="padding-left:8px">{data.text}</span>
                  </li>
                ))
              }
            </List>
          )
        }
      </div>
      <div
        class="item">
        <span
          style="width:32px;height:32px"
          onClick={() => {
            const currentLock = !lock()
            setLock(currentLock)
            props.onLockChange(currentLock)
          }}>
          {
            lock() ? <Icon name="lock"/> : <Icon name="unlock" />
          }
        </span>
      </div>
      <div
        class="item">
        <span
          style="width:32px;height:32px"
          onClick={() => {
            const v = !visible()
            setVisible(v)
            props.onVisibleChange(v)
          }}>
          {
            visible() ? <Icon name="visible" /> : <Icon name="invisible" />
          }
        </span>
      </div>
      <span class="split-line"/>
      <div
        class="item">
        <span
          style="width:32px;height:32px"
          onClick={() => { props.onRemoveClick(GROUP_ID) }}>
          <Icon name="remove" />
        </span>
      </div>
    </div>
  )
}

export default DrawingBar