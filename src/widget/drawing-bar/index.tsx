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
import {
  mapping, createSingleLineOptions, createMoreLineOptions,
  createPolygonOptions, createFibonacciOptions, createWaveOptions,
  getIconByKey
} from '../../icons'

export interface DrawingBarProps {
  locale: string
}

const DrawingBar: Component<DrawingBarProps> = props => {
  const [currentSingleLine, setCurrentSingleLine] = createSignal('horizontalStraightLine')
  const [currentMoreLine, setCurrentMoreLine] = createSignal('priceChannelLine')
  const [currentPolygon, setCurrentPolygon] = createSignal('circle')
  const [currentFibonacci, setCurrentFibonacci] = createSignal('fibonacciLine')
  const [currennWave, setCurrentWave] = createSignal('threeWaves')

  const overlays = createMemo(() => {

  })

  return (
    <div
      class="klinecharts-pro-drawing-bar">
      <div class="item">
        <div class="icon-container">
          {getIconByKey(currentSingleLine())}
        </div>
      </div>
      <div class="item">
        <div class="icon-container">
          {getIconByKey(currentMoreLine())}
        </div>
      </div>
      <div class="item">
        <div class="icon-container">
          {getIconByKey(currentPolygon())}
        </div>
      </div>
      <div class="item">
        <div class="icon-container">
          {getIconByKey(currentFibonacci())}
        </div>
      </div>
      <div class="item">
        <div class="icon-container">
          {getIconByKey(currennWave())}
        </div>
      </div>
    </div>
  )
}

export default DrawingBar