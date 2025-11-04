import { Overlay, OverlayEvent } from 'klinecharts';
import { createSignal } from 'solid-js';
import { ExitType } from '../types';
import { ctrlKeyedDown, setCtrlKeyedDown } from './keyEventStore';
import { getScreenSize } from '../helpers';

export type overlayType =
'point'|'line'|'rect'|'polygon'|'circle'|'arc'|'text'|'horizontalStraightLine'|'horizontalRayLine'|'horizontalSegment'|
'verticalStraightLine'|'verticalRayLine'|'verticalSegment'|'straightLine'|'rayLine'|'segment'|'arrow'|'priceLine'
export interface OtherTypes {
  exitType?: ExitType
  overlayType?: overlayType
}

export const [showOverlayPopup, setShowOverlayPopup] = createSignal(false)
export const [popupTop, setPopupTop] = createSignal(0)
export const [popupLeft, setPopupLeft] = createSignal(0)
export const [popupOverlay, setPopupOverlay] = createSignal<Overlay>()
export const [popupOtherInfo, setPopupOtherInfo] = createSignal<OtherTypes>()

export const [showPositionSetting, setShowPositionSetting] = createSignal(false)
export const [showOverlaySetting, setShowOverlaySetting] = createSignal(false)
export const [showSellSetting, setShowSellSetting] = createSignal(false)
export const [showTpSetting, setShowTpSetting] = createSignal(false)
export const [showSlSetting, setShowSlSetting] = createSignal(false)

export const getOverlayType = () => {
	return popupOverlay()?.name ?? 'Object'
}

export const useOverlaySettings = () => {
	const openPopup = (event: OverlayEvent<unknown>, others?: OtherTypes) => {
		setPopupTop(getScreenSize().y - event.pageY! > 200 ? event.pageY! : getScreenSize().y-200)
		setPopupLeft(getScreenSize().x - event.pageX! > 200 ? event.pageX! : getScreenSize().x-200)
		setPopupOverlay(event.overlay)
		setPopupOtherInfo(others)
		setShowOverlayPopup(true)
	}

	const closePopup = () => {
		setShowOverlayPopup(false)
		// setPopupOtherInfo({})
	}

	return { openPopup, closePopup }
}
