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

import i18n from '../../i18n'

import { SelectDataSourceItem } from '../../component'

const data: Record<string, string> = {
  'Etc/UTC': 'utc',
  'Pacific/Honolulu': 'honolulu',
  'America/Juneau': 'juneau',
  'America/Los_Angeles': 'los_angeles',
  'America/Chicago': 'chicago',
  'America/Toronto': 'toronto',
  'America/Sao_Paulo': 'sao_paulo',
  'Europe/London': 'london',
  'Europe/Berlin': 'berlin',
  'Asia/Bahrain': 'bahrain',
  'Asia/Dubai': 'dubai',
  'Asia/Ashkhabad': 'ashkhabad',
  'Asia/Almaty': 'almaty',
  'Asia/Bangkok': 'bangkok',
  'Asia/Shanghai': 'shanghai',
  'Asia/Tokyo': 'tokyo',
  'Australia/Sydney': 'sydney',
  'Pacific/Norfolk': 'norfolk'
}

export function translateTimezone(timezone: string, locale: string): string {
  return i18n(data[timezone], locale)
}

export function createTimezoneSelectOptions(locale: string): SelectDataSourceItem[] {
  return Object.keys(data).map(key => ({
    key: key,
    text: i18n(data[key], locale)
  }))
}