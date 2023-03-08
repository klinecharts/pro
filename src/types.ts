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

import { KLineData, Nullable } from 'klinecharts'

export type NetworkState = 'pending' | 'ok' | 'error'

export interface SymbolInfo {
  logo?: string
  code: string
  name?: string
  exchange?: string
  pricePrecision?: number
  volumePrecision?: number
}

export interface LoadDataEventDetail {
  symbol: SymbolInfo
  period: string
  timestamp: Nullable<number>
  successCallback: (dataList: KLineData[], more: boolean) => void
  errorCallback: () => void
}

export interface UpdateDataEventDetail {
  symbol: SymbolInfo
  period: string
  callback: (data: KLineData) => void
}