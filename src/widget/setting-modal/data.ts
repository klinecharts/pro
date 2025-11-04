/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific locale governing permissions and
 * limitations under the License.
 */

import i18n from '../../i18n'
import useDataSource from './settings/dataSource'
import getCandleSettings from './settings/candle'
import getIndicatorSettings from './settings/indicator'
import getXAxisSettings from './settings/xAxis'
import getYAxisSettings from './settings/yAxis'
import getGridSettings from './settings/grid'
import getCrosshairSettings from './settings/crosshair'
import getOverlaySettings from './settings/overlay'

export function getOptions (locale: string) {
  const { size } = useDataSource(locale)
  return [
    ...getCandleSettings(locale),
    ...getIndicatorSettings(locale),
    ...getXAxisSettings(locale),
    ...getYAxisSettings(locale),
    ...getGridSettings(locale),
    ...getCrosshairSettings(locale),
    ...getOverlaySettings(locale),

    // seperator
    {
      key: 'separator.size',
      text: i18n('Seperator size', locale),
      component: 'select',
      dataSource: size
    },
    {
      key: 'separator.fill',
      text: i18n('Fill', locale),
      component: 'switch',
    },
    {
      key: 'separator.activeBackgroundColor',
      text: i18n('Background color', locale),
      component: 'color',
    }
  ]
}