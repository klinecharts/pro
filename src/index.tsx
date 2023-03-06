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

import { customElement } from 'solid-element'
import KLineChartPro, { NetworkState } from './KLineChartPro'

customElement(
  'klinecharts-pro', 
  {
    class: '',
    theme: 'light',
    networkState: 'ok' as NetworkState,
    locale: 'zh-CN',
    defaultTimezone: 'Asia/Shanghai',
    symbol: '',
    defaultPeriod: '1m',
    periods: ['1m', '5m', '15m', '1H', '2H', '4H', 'D', 'W', 'M', 'Y'],
    defaultMainIndicators: [] as string[],
    defaultSubIndicators: [] as string[]
  },
  KLineChartPro
)
