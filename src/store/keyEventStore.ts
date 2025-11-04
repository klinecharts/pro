import { createSignal, startTransition } from "solid-js";
import { indicatorModalVisible, instanceapi, orderPanelVisible, periodModalVisible, rootlelID, screenshotUrl, setIndicatorModalVisible, setOrderPanelVisible, setPeriodModalVisible, setScreenshotUrl, setSettingModalVisible, settingModalVisible } from "./chartStore";
import { documentResize, fullScreen, orderModalVisible, theme } from "./chartStateStore";
import { Chart } from 'klinecharts';
import { periodInputValue, setPeriodInputValue } from "../widget/timeframe-modal";
import { setInputClass } from "../component/input";
import { showOverlaySetting } from "./overlaySettingStore";

export const [ctrlKeyedDown, setCtrlKeyedDown] = createSignal(false)
export const [widgetref, setWidgetref] = createSignal<string | Chart | HTMLElement>('')
export const [timerid, setTimerid] = createSignal<NodeJS.Timeout>()

export const useKeyEvents = () => {
  const handleKeyDown = (event:KeyboardEvent) => {
    if (event.ctrlKey || event.metaKey) {
      event.preventDefault()
      setCtrlKeyedDown(true)
    }
    if (ctrlKeyedDown()) {
      switch (event.key) {
        case 'o':
          break;
        case 'l':
          showOrderlist()
          break;
        case 'i':
          if (allModalHidden('indi')) {
            setIndicatorModalVisible(visible => !visible)
          }
          break;
        case 's':
          if (allModalHidden('settings')) {
            setSettingModalVisible(visible => !visible)
          }
          break;
        case 'z':
          //TODO: we should undo one step
          break;
        case 'y':
          //TODO: we should redo one step
          break;
        case 'c':
          //TODO: we should copy any selected overlay to clipboard
          break;
        case 'v':
          //TODO: we should paste the copied overlay from clipboard
          break;
        case 'p':
          if (allModalHidden('screenshot'))
            takeScreenshot()
          break;
        case 'f':
          toggleFullscreen()
          break;
        case 'Backspace':
          break;
      }

      return
    }
    if (['1','2','3','4','5','6','7','8','9'].includes(event.key) && allModalHidden('period')) {
      // if (periodInputValue().length < 1)
      //   setPeriodInputValue(event.key)
      if (!periodModalVisible()) {
        setPeriodModalVisible(true)
        setInputClass('klinecharts-pro-input klinecharts-pro-timeframe-modal-input input-error')
      }
    } else if (event.key === ' ') {
    } else if (event.key === 'ArrowDown') {
    } else if (event.key === 'ArrowUp') {
    } else if (event.key === 'Delete') {
      instanceapi()?.removeOverlay()
    } else if (event.key === 'Escape') {
      //TODO: this should hide all modals
      setPeriodModalVisible(false)
      setPeriodInputValue('')

      setSettingModalVisible(false)
      setOrderPanelVisible(false)
      setIndicatorModalVisible(false)
      setScreenshotUrl('')
    }
  }

  const handleKeyUp = (event:KeyboardEvent) => {
    if (!event.ctrlKey || !event.metaKey) {
      setCtrlKeyedDown(false)
      event.preventDefault()
    }
  }

  return { handleKeyDown, handleKeyUp }
}

const allModalHidden = (except: 'settings'|'indi'|'screenshot'|'order'|'period') => {
  let value = false
  switch (except) {
    case 'settings':
      value = !indicatorModalVisible() && screenshotUrl() === '' && !orderModalVisible() && !periodModalVisible() && !showOverlaySetting()
    case 'indi':
      value = !settingModalVisible() && screenshotUrl() === '' && !orderModalVisible() && !periodModalVisible() && !showOverlaySetting()
      break
    case 'screenshot':
      value = !settingModalVisible() && !indicatorModalVisible() && !orderModalVisible() && !periodModalVisible() && !showOverlaySetting()
      break
    case 'order':
      value = !settingModalVisible() && !indicatorModalVisible() && screenshotUrl() === '' && !periodModalVisible() && !showOverlaySetting()
      break
    case 'period':
      value = !settingModalVisible() && !indicatorModalVisible() && screenshotUrl() === '' && !orderModalVisible() && !showOverlaySetting()
      break
  }
  return value
}

const showOrderlist = async () => {
  try {
    await startTransition(() => setOrderPanelVisible(!orderPanelVisible()))
    documentResize()
  } catch (e) {}
}

const takeScreenshot = () => {
  const url = instanceapi()!.getConvertPictureUrl(true, 'jpeg', theme() === 'dark' ? '#151517' : '#ffffff')
  setScreenshotUrl(url)
}

const toggleFullscreen = () => {
  if (!fullScreen()) {
    // const el = ref?.parentElement
    const el = document.querySelector(`#${rootlelID()}`)
    if (el) {
      // @ts-expect-error
      const enterFullScreen = el.requestFullscreen ?? el.webkitRequestFullscreen ?? el.mozRequestFullScreen ?? el.msRequestFullscreen
      enterFullScreen.call(el)
      // setFullScreen(true)
    } else {
    }
  } else {
    // @ts-expect-error
    const exitFullscreen = document.exitFullscreen ?? document.msExitFullscreen ?? document.mozCancelFullScreen ?? document.webkitExitFullscreen
    exitFullscreen.call(document)
    // setFullScreen(false)
  }
}