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

import zhCN from './zh-CN.json'
import enUS from './en-US.json'

const locales = {
  'zh-CN': zhCN,
  'en-US': enUS
}

export function load (key: string, ls: any) {
  // @ts-expect-error
  locales[key] = ls
}

export default (key: string, locale: string) => {
  // @ts-expect-error
  return locales[locale]?.[key] ?? key
}
