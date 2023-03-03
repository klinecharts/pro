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

export function translateTimezone (timezone: string, locale: string): string {
  switch (timezone) {
    case 'Etc/UTC': return i18n('utc', locale)
    case 'Pacific/Honolulu': return i18n('honolulu', locale)
    case 'America/Juneau': return i18n('juneau', locale)
    case 'America/Los_Angeles': return i18n('los_angeles', locale)
    case 'America/Chicago': return i18n('chicago', locale)
    case'America/Toronto': return i18n('toronto', locale)
    case 'America/Sao_Paulo': return i18n('sao_paulo', locale)
    case 'Europe/London': return i18n('london', locale)
    case 'Europe/Berlin': return i18n('berlin', locale)
    case 'Asia/Bahrain': return i18n('bahrain', locale)
    case 'Asia/Dubai': return i18n('dubai', locale)
    case 'Asia/Ashkhabad': return i18n('ashkhabad', locale)
    case 'Asia/Almaty': return i18n('almaty', locale)
    case 'Asia/Bangkok': return i18n('bangkok', locale)
    case 'Asia/Shanghai': return i18n('shanghai', locale)
    case 'Asia/Tokyo': return i18n('tokyo', locale)
    case 'Australia/Sydney': return i18n('sydney', locale)
    case 'Pacific/Norfolk': return i18n('norfolk', locale)
  }
  return timezone
}

export function createTimezoneSelectOptions (locale: string): SelectDataSourceItem[] {
  return [
    { key: 'Etc/UTC', text: i18n('utc', locale) },
    { key: 'Pacific/Honolulu', text: i18n('honolulu', locale) },
    { key: 'America/Juneau', text: i18n('juneau', locale) },
    { key: 'America/Los_Angeles', text: i18n('los_angeles', locale) },
    { key: 'America/Chicago', text: i18n('chicago', locale) },
    { key: 'America/Toronto', text: i18n('toronto', locale) },
    { key: 'America/Sao_Paulo', text: i18n('sao_paulo', locale) },
    { key: 'Europe/London', text: i18n('london', locale) },
    { key: 'Europe/Berlin', text: i18n('berlin', locale) },
    { key: 'Asia/Bahrain', text: i18n('bahrain', locale) },
    { key: 'Asia/Dubai', text: i18n('dubai', locale) },
    { key: 'Asia/Ashkhabad', text: i18n('ashkhabad', locale) },
    { key: 'Asia/Almaty', text: i18n('almaty', locale) },
    { key: 'Asia/Bangkok', text: i18n('bangkok', locale) },
    { key: 'Asia/Shanghai', text: i18n('shanghai', locale) },
    { key: 'Asia/Tokyo', text: i18n('tokyo', locale) },
    { key: 'Australia/Sydney', text: i18n('sydney', locale) },
    { key: 'Pacific/Norfolk', text: i18n('norfolk', locale) }
  ]
}