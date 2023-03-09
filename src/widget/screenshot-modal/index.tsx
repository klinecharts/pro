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

import { Component } from 'solid-js'

import { Modal } from '../../component'

import i18n from '../../i18n'

export interface ScreenshotModalProps {
  locale: string
  url: string
  onClose: () => void
}

const ScreenshotModal: Component<ScreenshotModalProps> = props => {
  return (
    <Modal
      title={i18n('screenshot', props.locale)}
      width={540}
      buttons={[
        {
          type: 'confirm',
          children: i18n('save', props.locale),
          onClick: () => {
            const a = document.createElement('a')
            a.download = 'screenshot'
            a.href = props.url
            document.body.appendChild(a)
            a.click()
            a.remove()
          }
        }
      ]}
      onClose={props.onClose}>
      <img style="width:500px;margin-top: 20px" src={props.url}/>
    </Modal>
  )
}

export default ScreenshotModal
