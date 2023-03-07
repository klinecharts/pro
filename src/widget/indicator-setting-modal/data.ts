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

export default {
  AO: [
    { paramNameKey: 'params_1', precision: 0, min: 1, default: 5 },
    { paramNameKey: 'params_2', precision: 0, min: 1, default: 34 },
  ],
  BIAS: [
    { paramNameKey: 'BIAS1', precision: 0, min: 1, styleKey: 'lines[0].color' },
    { paramNameKey: 'BIAS2', precision: 0, min: 1, styleKey: 'lines[1].color' },
    { paramNameKey: 'BIAS3', precision: 0, min: 1, styleKey: 'lines[2].color' },
    { paramNameKey: 'BIAS4', precision: 0, min: 1, styleKey: 'lines[3].color' },
    { paramNameKey: 'BIAS5', precision: 0, min: 1, styleKey: 'lines[4].color' },
  ],
  BOLL: [
    { paramNameKey: 'period', precision: 0, min: 1, default: 20 },
    { paramNameKey: 'standard_deviation', precision: 2, min: 1, default: 2 },
  ],
  MA: [
    { paramNameKey: 'MA1', precision: 0, min: 1, styleKey: 'lines[0].color' },
    { paramNameKey: 'MA2', precision: 0, min: 1, styleKey: 'lines[1].color' },
    { paramNameKey: 'MA3', precision: 0, min: 1, styleKey: 'lines[2].color' },
    { paramNameKey: 'MA4', precision: 0, min: 1, styleKey: 'lines[3].color' },
    { paramNameKey: 'MA5', precision: 0, min: 1, styleKey: 'lines[4].color' },
  ],
  EMA: [
    { paramNameKey: 'EMA1', precision: 0, min: 1, styleKey: 'lines[0].color' },
    { paramNameKey: 'EMA2', precision: 0, min: 1, styleKey: 'lines[1].color' },
    { paramNameKey: 'EMA3', precision: 0, min: 1, styleKey: 'lines[2].color' },
    { paramNameKey: 'EMA4', precision: 0, min: 1, styleKey: 'lines[3].color' },
    { paramNameKey: 'EMA5', precision: 0, min: 1, styleKey: 'lines[4].color' },
  ],
}
