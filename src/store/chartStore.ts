import { createSignal } from "solid-js"
import { ChartDataLoaderType, ChartPro, ChartProOptions, Period, ProChart, SymbolInfo } from "../types"
import { Nullable } from "klinecharts"

export interface ChartProComponentProps extends Required<Omit<ChartProOptions, 'container' | 'datafeed'>> {
  ref: (chart: ChartPro) => void
  dataloader: ChartDataLoaderType
}

export const [drawingBarVisible, setDrawingBarVisible] = createSignal(false)
export const [orderPanelVisible, setOrderPanelVisible] = createSignal(false)
export const [settingModalVisible, setSettingModalVisible] = createSignal(false)
export const [indicatorModalVisible, setIndicatorModalVisible] = createSignal(false)
export const [periodModalVisible, setPeriodModalVisible] = createSignal(false)
export const [showSpeed, setShowSpeed] = createSignal(false)

export const [screenshotUrl, setScreenshotUrl] = createSignal('')
export const [rootlelID, setRooltelId] = createSignal('')

export const [loadingVisible, setLoadingVisible] = createSignal(false)
export const [symbol, setSymbol] = createSignal<Nullable<SymbolInfo>>(null)
export const [period, setPeriod] = createSignal<Nullable<Period>>(null)
export const [instanceapi, setInstanceapi] = createSignal<Nullable<ProChart>>(null)