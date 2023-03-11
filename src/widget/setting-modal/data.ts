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

export function getOptions (locale: string) {
  return [
    {
      key: 'candle.type',
      text: i18n('candle_type', locale),
      component: 'select',
      dataSource: [
        { key: 'candle_solid', text: i18n('candle_solid', locale) },
        { key: 'candle_stroke', text: i18n('candle_stroke', locale) },
        { key: 'candle_up_stroke', text: i18n('candle_up_stroke', locale) },
        { key: 'candle_down_stroke', text: i18n('candle_down_stroke', locale) },
        { key: 'ohlc', text: i18n('ohlc', locale) },
        { key: 'area', text: i18n('area', locale) }
      ]
    },
    {
      key: 'candle.priceMark.last.show',
      text: i18n('last_price_show', locale),
      component: 'switch'
    },
    {
      key: 'candle.priceMark.high.show',
      text: i18n('high_price_show', locale),
      component: 'switch'
    },
    {
      key: 'candle.priceMark.low.show',
      text: i18n('low_price_show', locale),
      component: 'switch'
    },
    {
      key: 'indicator.lastValueMark.show',
      text: i18n('indicator_last_value_show', locale),
      component: 'switch'
    },
    {
      key: 'yAxis.type',
      text: i18n('price_axis_type', locale),
      component: 'select',
      dataSource: [
        { key: 'normal', text: i18n('normal', locale) },
        { key: 'percentage', text: i18n('percentage', locale) },
        { key: 'log', text: i18n('log', locale) }
      ],
    },
    {
      key: 'yAxis.reverse',
      text: i18n('reverse_coordinate', locale),
      component: 'switch',
    },
    {
      key: 'grid.show',
      text: i18n('grid_show', locale),
      component: 'switch',
    }
  ]
}
