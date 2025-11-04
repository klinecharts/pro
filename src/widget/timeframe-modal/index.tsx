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

import { Component, createSignal } from 'solid-js'

import { Modal, Input } from '../../component'

import i18n from '../../i18n'

import { Period } from '../../types'
import { setInputClass } from '../../component/input'
import { setPeriodModalVisible } from '../../store/chartStore'

export interface TimeframeModalProps {
  locale: string
  periods: Period[]
  onTimeframeSelected: (period: Period) => void
}

export const [periodInputValue, setPeriodInputValue] = createSignal('')

const TimeframeModal: Component<TimeframeModalProps> = props => {
  const defClass = 'klinecharts-pro-input klinecharts-pro-timeframe-modal-input'
  const [period, setPeriod] = createSignal<Period|null>(null)

  const handleKeyDown = (event: KeyboardEvent) => {
    // Check if the pressed key is "Enter" (key code 13)
    if (event.key === "Enter") {
      if (period()) {
        props.onTimeframeSelected(period()!)
      }
      closeModal()
      // Add your desired action here
    } else {
      // Get the key code of the pressed key
      const keyCode = event.key;

      // Check if the key code corresponds to a number, letter, or Backspace
      const isAllowedKey =
        /^[a-zA-Z0-9]$/i.test(keyCode) || // Check for letters and numbers
        keyCode === "Backspace"; // Check for Backspace

      // If the key is not allowed, prevent default behavior (e.g., typing)
      if (isAllowedKey) {
        if (keyCode === 'Backspace')
          setPeriodInputValue(periodInputValue().slice(0, -1))
        else
          setPeriodInputValue(periodInputValue()+event.key)

        performCheck()
      }
    }
  }

  function performCheck() {
    const perio = props.periods.find((per) => {
      if (periodInputValue() === `${per.span}` && per.text.split(' ')[1].charAt(0) === 'm') {
        console.log('1 passed')
        return true
      }
      // if (periodInputValue().slice(0, -1) === `${per.multiplier}` && /\d/.test(periodInputValue().charAt(periodInputValue().length-1))) {
      //   console.log('2 passed')
      //   return true
      // }
      if (periodInputValue().slice(0, -1) === `${per.span}` && ((periodInputValue().charAt(periodInputValue().length - 1) === per.text.split(' ')[1].charAt(0)))) {
        console.log('3 passed')
        return true
      }
      return false
    })
    console.log(perio)
    if (perio) {
      setPeriod(perio)
      setInputClass(defClass)
    } else {
      setInputClass(defClass + ' input-error')
      setPeriod(null)
    }
  }

  function closeModal() {
    setPeriodInputValue('')
    setPeriodModalVisible(false)
  }

  performCheck()

  return (
    <Modal
      title={i18n('period_change', props.locale)}
      width={460}
      onClose={closeModal}>
      <Input
        placeholder={i18n('period_code', props.locale)}
        suffix={
          <svg viewBox="0 0 1024 1024">
            <path d="M945.066667 898.133333l-189.866667-189.866666c55.466667-64 87.466667-149.333333 87.466667-241.066667 0-204.8-168.533333-373.333333-373.333334-373.333333S96 264.533333 96 469.333333 264.533333 842.666667 469.333333 842.666667c91.733333 0 174.933333-34.133333 241.066667-87.466667l189.866667 189.866667c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c8.533333-12.8 8.533333-34.133333-2.133333-46.933334zM469.333333 778.666667C298.666667 778.666667 160 640 160 469.333333S298.666667 160 469.333333 160 778.666667 298.666667 778.666667 469.333333 640 778.666667 469.333333 778.666667z"/>
          </svg>
        }
        focus={true}
        value=""
        onKeyDown={handleKeyDown}/>
    </Modal>
  )
}

export default TimeframeModal
