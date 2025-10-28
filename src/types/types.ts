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

import { KLineData, Styles, DeepPartial, Nullable, Chart, DataLoader, Period as DefaultPeriod, IndicatorCreate, PaneOptions, OverlayCreate, FigureCreate, PickRequired, OverlayFilter, Overlay } from 'klinecharts'
import { OrderOverlay } from './overlayTypes'


export type FontWeights = 'thin' | 'extra-light' | 'light' | 'normal' | 'medium' | 'semi-bold' | 'bold' | 'extra-bold' | 'black'
export type OrderType = 'buy'|'sell'|'buystop'|'buylimit'|'sellstop'|'selllimit'
export type OrderModalType = 'placeorder'|'modifyorder'|'closepartial'
export type ExitType = 'stoploss'|'takeprofit'|'breakeven'|'manualclose'|'cancel'

export type DatafeedSubscribeCallback = (data: KLineData, timestamp?: number) => void
export type OrderPlacedCallback = (data: OrderInfo|null) => void     //this should be called when a user has successfully placed an order from consumer project side

export interface UndoOptions {
  /**
   * A boolean flag. Controls if undo should be disabled.
   */
  disableUndo?: boolean
}

export interface SymbolInfo {
  ticker: string
  name?: string
  shortName?: string
  exchange?: string
  market?: string
  pricePrecision?: number
  volumePrecision?: number
  priceCurrency?: string
  dollarPerPip?: number
  type?: string
  logo?: string
}

export interface OrderInfo {
  orderId: number
  action: OrderType
  entryPoint: number
  exitPoint?: number
  stopLoss?: number
  takeProfit?: number
  lotSize: number
  pips?: number
  pl?: number
  entryTime?: string
  exitTime?: string
  exitType?: ExitType
  partials?: string
  accountId?: number
}

export interface OrderModifyInfo {
  id: number
  action?: OrderType
  entrypoint?: number
  exitpoint?: number
  stoploss?: number
  takeprofit?: number
  lotsize?: number
  pips?: number
  pl?: number
  exittime?: string
  exittype?: ExitType
  partials?: string
}

export interface Period extends DefaultPeriod {
  text: string
}

export interface ProChart extends Chart {
  chart: Chart
  charts: Array<Chart>

  setActiveChart (id: string): void
  chartById (id: string): Chart | undefined
  getOverlay (filter?: PickRequired<OverlayFilter, 'name' | 'groupId'>): Overlay[]
  createOrderLine (options?: UndoOptions): Nullable<OrderOverlay>
  createOrderLines (nums: number, options?: UndoOptions): Array<Nullable<OrderOverlay>>
}

type IndicatorsType = {
  value?: IndicatorCreate,
  isStack?: boolean,
  paneOptions?: PaneOptions
}

type OverlaysType = {
  value?: OverlayCreate,
  paneId: string
}

type FiguresType = {
  value?: string|FigureCreate,
  ctx: CanvasRenderingContext2D
}

type OrderStyleType = {
  lineStyle?: {
		style?: string,
		size?: number,
		color?: string,
		dashedValue?: number[]
	},
	labelStyle?: {
		style?: string,
		size?: number,
		family?: string,
		weight?: string,
		paddingLeft?: number,
		paddingRight?: number,
		paddingBottom?: number,
		paddingTop?: number,
		borderStyle?: string,
		borderSize?: number,
		color?: string,
		borderColor?: string,
		backgroundColor?: string
	}
}

export type OrderStylesType = {
  buyStyle?: OrderStyleType,
  buyLimitStyle?: OrderStyleType,
  buyStopStyle?: OrderStyleType,
  sellStyle?: OrderStyleType,
  sellLimitStyle?: OrderStyleType,
  sellStopStyle?: OrderStyleType,
  stopLossStyle?: OrderStyleType,
  takeProfitStyle?: OrderStyleType
}

export interface ChartObjType {
  styleObj?: DeepPartial<Styles>
  overlays?: OverlaysType[]
  figures?: FiguresType[]
  indicators?: IndicatorsType[]
  orderStyles?: OrderStylesType
}

export interface Datafeed {
  searchSymbols (search?: string): Promise<SymbolInfo[]>
  getHistoryKLineData (symbol: SymbolInfo, period: Period, from: number, to: number): Promise<KLineData[]>
  subscribe (symbol: SymbolInfo, period: Period, callback: DatafeedSubscribeCallback): void
  unsubscribe (symbol: SymbolInfo, period: Period): void
}

export interface ChartDataLoaderType extends DataLoader {
  searchSymbols (search?: string): Promise<SymbolInfo[]>
  loading: boolean
}

export interface OrderResource {
  retrieveOrder (order_id: number): Promise<OrderInfo|null>
  retrieveOrders (action?: OrderType, account_id?: number|string): Promise<OrderInfo[]|null>
  openOrder (action: OrderType, lot_size: number, entry_price: number, stop_loss?: number, take_profit?: number): Promise<OrderInfo|null>
  closeOrder (order_id: number, lotsize?: number): Promise<OrderInfo|null>
  modifyOrder (order: OrderModifyInfo): Promise<OrderInfo|null>
  unsetSlOrTP (order_id: string|number, slortp: 'sl'|'tp'): Promise<OrderInfo|null>
  launchOrderModal (type: OrderModalType, callback: OrderPlacedCallback, order?: OrderModifyInfo): void
}

export interface ChartProOptions {
  container: string | HTMLElement
  rootElementId?: string
  styles?: DeepPartial<Styles>
  watermark?: string | Node
  theme?: string
  locale?: string
  drawingBarVisible?: boolean
  orderPanelVisible?: boolean
  symbol: SymbolInfo
  period: Period
  periods?: Period[]
  timezone?: string
  mainIndicators?: string[]
  subIndicators?: string[]
  datafeed: Datafeed
  dataTimestamp?: number
  orderController: OrderResource
}

export interface ChartPro {
  setTheme(theme: string): void
  getTheme(): string
  setStyles(styles: DeepPartial<Styles>): void
  getStyles(): Styles
  setLocale(locale: string): void
  getLocale(): string
  setTimezone(timezone: string): void
  getTimezone(): string
  setSymbol(symbol: SymbolInfo): void
  getSymbol(): SymbolInfo
  setPeriod(period: Period): void
  getPeriod(): Period
  getInstanceApi(): Nullable<Chart>
  resize(): void
  dispose(): void
}
