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

import { createSignal, Component, JSX } from 'solid-js'
import chroma from "chroma-js";

export interface ColorProps {
  class?: string
  style?: JSX.CSSProperties | string
  value?: JSX.Element
  valueKey?: string
	reactiveChange?: boolean
  onChange?: (data: string) => void
}

const Color: Component<ColorProps> = props => {
	const op = String(props.value).includes('rgba') ? chroma(String(props.value)).alpha()*100 : 100
  const [open, setOpen] = createSignal(false)
	const [opacity, setOpacity] = createSignal(op)
	const [selectedColor, setSelectedColor] = createSignal(props.value)
	const [finalColor, setFinalColor] = createSignal(props.value)
	const [rangeFocused, setRangeFocused] = createSignal(false)
	const colors = [
		['rgb(255, 255, 255)',
		'rgb(178, 181, 190)',
		'rgb(149, 152, 161)',
		'rgb(120, 123, 134)',
		'rgb(93, 96, 107)',
		'rgb(42, 46, 57)',
		'rgb(0, 0, 0)'],

		['rgb(242, 54, 69)',
		'rgb(252, 203, 205)',
		'rgb(250, 161, 164)',
		'rgb(247, 124, 128)',
		'rgb(247, 82, 95)',
		'rgb(178, 40, 51)',
		'rgb(128, 25, 34)'],
		
		['rgb(255, 152, 0)',
		'rgb(255, 224, 178)',
		'rgb(255, 204, 128)',
		'rgb(255, 183, 77)',
		'rgb(255, 167, 38)',
		'rgb(245, 124, 0)',
		'rgb(230, 81, 0)'],

		['rgb(255, 235, 59)',
		'rgb(255, 249, 196)',
		'rgb(255, 245, 157)',
		'rgb(255, 241, 118)',
		'rgb(255, 238, 88)',
		'rgb(251, 192, 45)',
		'rgb(245, 127, 23)',],

		['rgb(76, 175, 80)',
		'rgb(200, 230, 201)',
		'rgb(165, 214, 167)',
		'rgb(129, 199, 132)',
		'rgb(102, 187, 106)',
		'rgb(56, 142, 60)',
		'rgb(27, 94, 32)',],

		['rgb(8, 153, 129)',
		'rgb(172, 229, 220)',
		'rgb(112, 204, 189)',
		'rgb(66, 189, 168)',
		'rgb(34, 171, 148)',
		'rgb(5, 102, 86)',
		'rgb(0, 51, 42)',],

		['rgb(0, 188, 212)',
		'rgb(178, 235, 242)',
		'rgb(128, 222, 234)',
		'rgb(77, 208, 225)',
		'rgb(38, 198, 218)',
		'rgb(0, 151, 167)',
		'rgb(0, 96, 100)',],

		['rgb(41, 98, 255)',
		'rgb(187, 217, 251)',
		'rgb(144, 191, 249)',
		'rgb(91, 156, 246)',
		'rgb(49, 121, 245)',
		'rgb(24, 72, 204)',
		'rgb(12, 50, 153)',],

		['rgb(103, 58, 183)',
		'rgb(209, 196, 233)',
		'rgb(179, 157, 219)',
		'rgb(149, 117, 205)',
		'rgb(126, 87, 194)',
		'rgb(81, 45, 168)',
		'rgb(49, 27, 146)',],

		['rgb(156, 39, 176)',
		'rgb(225, 190, 231)',
		'rgb(206, 147, 216)',
		'rgb(186, 104, 200)',
		'rgb(171, 71, 188)',
		'rgb(123, 31, 162)',
		'rgb(74, 20, 140)',],

		['rgb(233, 30, 99)',
		'rgb(248, 187, 208)',
		'rgb(244, 143, 177)',
		'rgb(240, 98, 146)',
		'rgb(236, 64, 122)',
		'rgb(194, 24, 91)',
		'rgb(136, 14, 79)',],

		['#00698b',
		'#fb7b50']
	]

	const closeColorPallete = () => {
		setOpen(false)
	}
	const cancelColorChange = () => {
		setSelectedColor(props.value)
		setFinalColor(props.value)
		props.onChange?.((props.value as string))
		closeColorPallete()
	}
	const addOpacity = () => {
		const op = opacity()/100
		const x = chroma(selectedColor() as any).alpha(op).css();
		setFinalColor(x)
		if (props.reactiveChange ?? true)
			props.onChange?.((finalColor() as string))
	}

	const handleRangeChange = (event:any) => {
		setOpacity(event.target.value);
		addOpacity()
	}

  return (
    <div
			style={`width: 120px; background-color: ${finalColor()}`}
      class={`klinecharts-pro-color ${props.class ?? ''} ${open() ? 'klinecharts-pro-color-show' : ''}`}
      tabIndex="0"
      // onClick={_ => { setOpen(o => !o) }}
      // onBlur={_ => { 
			// 	if (!rangeFocused()) {
			// 		closeColorPallete();
			// 	}
			// }}
		>
      <div class="selector-container"
				onClick={(e) => {
					setOpen(true)
				}}
			>
        {/* <span class="value">{props.value}</span> */}
        <i class="arrow"/>
      </div>
      
			<div class="drop-down-container" style={`left: 50%; top: 20%`}>
					{
						colors.map((data:any) => {
							return (
								<div class="each_line">
									{
										data.map((d:any) => {
											return (
												<div class={`each_color ${d == selectedColor() ? 'selected' : ''}`} style={`background-color: ${d}`}
													onClick={e => {
														e.preventDefault()
														setSelectedColor(d)
														addOpacity()
													}}>
												</div>
											)
										})
									}
								</div>
							)
						})
					}
					<div class="split_line"></div>
					<div class="range_div">
						<input class="range" style={`background-color: ${finalColor()}; border: 1px solid ${selectedColor()}`}
							type="range" min="1" max="100" value={opacity()}
							// onClick={e => e.preventDefault()}
							onInput={(e) => { e.preventDefault; handleRangeChange(e); }}
							onFocus={() => {
								setRangeFocused(true)
							}}
							onBlur={() => {
								setRangeFocused(false)
							}}
						/>
						<p>{opacity()}%</p>
					</div>
					<div class="split_line"></div>
					<div class="submit">
						<span class="cancel" onClick={cancelColorChange}>Cancel</span>
						<span onclick={
							() => {
								if (props.reactiveChange === false)
									props.onChange?.(finalColor() as string)
								closeColorPallete()
							}
						}>Ok</span>
					</div>
			</div>
    </div>
  )
}
// style={`background-color: ${finalColor()}; border: 1px solid ${selectedColor()}`} 

export default Color
