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

import { Coordinate, LineStyle, LineType, OverlayEvent, Point, TextStyle, utils } from 'klinecharts'
import { OrderLineProperties, OrderOverlay, OrderOverlayCreate, OverlayEventListenerParams } from '../../types/overlayTypes'
import { buyStyle } from '../../store/overlayStyle/positionStyleStore'
import { convertFontweightNameToNumber, getPrecision } from '../../helpers'
import { FontWeights } from "../../types/types"
// import { useOverlaySettings } from '../../../store/overlaySettingStore'

const executeCallback = (listener?: OverlayEventListenerParams, event?: OverlayEvent<unknown>) => {
  if (listener) {
    const { params, callback } = listener
    callback(params, event)
  }
}

const OrderLine = (): OrderOverlayCreate => {
  let properties: OrderLineProperties = {
    isBodyVisible: true,
    isCancelButtonVisible: true,
    isQuantityVisible: true,
    marginRight: 10
  }

  const lineStyle = (): LineStyle => {
    return {
      style: properties.lineStyle ?? buyStyle().lineStyle.style,
      size: properties.lineWidth ?? buyStyle().lineStyle.size,
      color: properties.lineColor ?? buyStyle().lineStyle.color,
      dashedValue: properties.lineDashedValue ?? buyStyle().lineStyle.dashedValue
    }
  }

  const labelStyle = (type: 'body'|'quantity'|'cancel-button'): TextStyle => {
    return {
      style: buyStyle().labelStyle.style,
      size: (type == 'body' ? properties.bodySize : type == 'quantity' ? properties.quantitySize : properties.cancelButtonSize) ?? properties.bodySize ?? buyStyle().labelStyle.size,
      weight: (type == 'body' ? properties.bodyWeight : type == 'quantity' ? properties.quantityWeight : properties.cancelButtonWeight) ?? properties.bodyWeight ?? buyStyle().labelStyle.weight,
      family: (type == 'body' ? properties.bodyFont : type == 'quantity' ? properties.quantityFont : 'icomoon') ?? properties.bodyFont ?? buyStyle().labelStyle.family,
      color: (type == 'body' ? properties.bodyTextColor : type == 'quantity' ? properties.quantityColor : properties.cancelButtonIconColor) ?? properties.bodyTextColor ?? buyStyle().labelStyle.color,
      backgroundColor: (type == 'body' ? properties.bodyBackgroundColor : type == 'quantity' ? properties.quantityBackgroundColor : properties.cancelButtonBackgroundColor) ?? properties.bodyBackgroundColor ?? buyStyle().labelStyle.backgroundColor,
      borderColor: (type == 'body' ? properties.bodyBorderColor : type == 'quantity' ? properties.quantityBorderColor : properties.cancelButtonBorderColor) ?? properties.bodyBorderColor ?? buyStyle().labelStyle.borderColor,
      borderStyle: properties.borderStyle ?? buyStyle().labelStyle.borderStyle,
      borderSize: properties.borderSize ?? buyStyle().labelStyle.borderSize,
      borderDashedValue: properties.borderDashedValue ?? buyStyle().labelStyle.borderDashedValue,
      borderRadius: properties.borderRadius ?? buyStyle().labelStyle.borderRadius,
      paddingLeft: (type == 'body' ? properties.bodyPaddingLeft : type == 'quantity' ? properties.quantityPaddingLeft : properties.cancelButtonPaddingLeft) ?? properties.bodyPaddingLeft ?? buyStyle().labelStyle.paddingLeft,
      paddingRight: (type == 'body' ? properties.bodyPaddingRight : type == 'quantity' ? properties.quantityPaddingRight : properties.cancelButtonPaddingRight) ?? properties.bodyPaddingRight ?? buyStyle().labelStyle.paddingRight,
      paddingTop: (type == 'body' ? properties.bodyPaddingTop : type == 'quantity' ? properties.quantityPaddingTop : properties.cancelButtonPaddingTop) ?? properties.bodyPaddingTop ?? buyStyle().labelStyle.paddingTop,
      paddingBottom: (type == 'body' ? properties.bodyPaddingBottom : type == 'quantity' ? properties.quantityPaddingBottom : properties.cancelButtonPaddingBottom) ?? properties.bodyPaddingBottom ?? buyStyle().labelStyle.paddingBottom
  }}

  return {
    name: 'orderLine',
    totalStep: 2,
    needDefaultPointFigure: false,
    needDefaultXAxisFigure: false,
    needDefaultYAxisFigure: true,
    createPointFigures: ({chart, coordinates, bounding }) => {
      const bodyStyle = labelStyle('body')
      const quantityStyle = labelStyle('quantity')
      const cancelStyle = labelStyle('cancel-button')
      const cancelText = '\ue900'
      const quantityText = (properties.quantity ?? 'Size').toString()
      const bodyText = properties.text ?? 'Position Line'
      const cancelMarginRight = properties.marginRight
      const quantityMarginRight = utils.calcTextWidth(cancelText) + cancelStyle.paddingLeft + cancelStyle.paddingRight + cancelMarginRight - (properties.borderSize ?? buyStyle().labelStyle.borderSize)
      const bodyMarginRight = utils.calcTextWidth((quantityText).toString()) + quantityStyle.paddingLeft + quantityStyle.paddingRight + quantityMarginRight
      const lineMarginRight = utils.calcTextWidth((bodyText).toString()) + bodyStyle.paddingLeft + bodyStyle.paddingRight + bodyMarginRight

      return [
        {
          key: 'price-line',
          type: 'line',
          attrs: {
            coordinates: [
              {
                x: 0,
                y: properties.price ? (chart.convertToPixel({ timestamp: chart.getDataList().at(chart.getDataList().length -1)?.timestamp, value: properties.price }) as Partial<Coordinate> ).y : coordinates[0].y
              },
              {
                x: bounding.width - lineMarginRight,
                y: properties.price ? (chart.convertToPixel({ timestamp: chart.getDataList().at(chart.getDataList().length -1)?.timestamp, value: properties.price }) as Partial<Coordinate> ).y : coordinates[0].y
              }
            ]
          },
          styles: lineStyle(),
          ignoreEvent: true
        },
        {
          key: 'price-line-two',
          type: 'line',
          attrs: {
            coordinates: [
              {
                x: bounding.width - cancelMarginRight,
                y: properties.price ? (chart.convertToPixel({ timestamp: chart.getDataList().at(chart.getDataList().length -1)?.timestamp, value: properties.price }) as Partial<Coordinate> ).y : coordinates[0].y
              },
              {
                x: bounding.width,
                y: properties.price ? (chart.convertToPixel({ timestamp: chart.getDataList().at(chart.getDataList().length -1)?.timestamp, value: properties.price }) as Partial<Coordinate> ).y : coordinates[0].y
              }
            ]
          },
          styles: lineStyle(),
          ignoreEvent: true
        },
        {
          key: 'body',
          type: 'text',
          attrs: {
            x: bounding.width - bodyMarginRight,
            y:properties.price ? (chart.convertToPixel({ timestamp: chart.getDataList().at(chart.getDataList().length -1)?.timestamp, value: properties.price }) as Partial<Coordinate> ).y : coordinates[0].y,
            text:bodyText,
            align: 'right',
            baseline: 'middle'
          },
          styles: bodyStyle
        },
        {
          key: 'quantity',
          type: 'text',
          attrs: {
            x: bounding.width - quantityMarginRight,
            y:properties.price ? (chart.convertToPixel({ timestamp: chart.getDataList().at(chart.getDataList().length -1)?.timestamp, value: properties.price }) as Partial<Coordinate> ).y : coordinates[0].y,
            text: quantityText,
            align: 'right',
            baseline: 'middle'
          },
          styles: quantityStyle
        },
        {
          key: 'cancel-button',
          type: 'text',
          attrs: {
            x: bounding.width - cancelMarginRight,
            y:properties.price ? (chart.convertToPixel({ timestamp: chart.getDataList().at(chart.getDataList().length -1)?.timestamp, value: properties.price }) as Partial<Coordinate> ).y : coordinates[0].y,
            text: cancelText,
            align: 'right',
            baseline: 'middle'
          },
          styles: cancelStyle
        }
      ]
    },
    createYAxisFigures: ({ chart, overlay, coordinates, bounding, yAxis }) => {
      const precision = getPrecision(chart, overlay, yAxis)
      const isFromZero = yAxis?.isFromZero() ?? false
      let textAlign: CanvasTextAlign
      let x: number
      if (isFromZero) {
        textAlign = 'left'
        x = 0
      } else {
        textAlign = 'right'
        x = bounding.width
      }
      let text: string|null|undefined
      if (properties.price !== undefined) {
        overlay.points[0].value = properties.price
      }

      if (utils.isValid(overlay.extendData)) {
        if (!utils.isFunction(overlay.extendData)) {
          text = (overlay.extendData ?? '') as string
        } else {
          text = overlay.extendData(overlay) as string
        }
      }
      if (!utils.isValid(text) && overlay.points[0].value !== undefined) {
        text = utils.formatPrecision(overlay.points[0].value, precision.price)
      }

      return {
        type: 'text',
        attrs: {
          x, 
          y: properties.price ? (chart.convertToPixel({ timestamp: chart.getDataList().at(chart.getDataList().length -1)?.timestamp, value: properties.price }) as Partial<Coordinate> ).y : coordinates[0].y,
          text: text ?? '',
          align: textAlign, baseline:
          'middle'
        },
        styles: labelStyle('body')
      }
    },
    onSelected: (event) => {
      if (event.preventDefault)
        event.preventDefault()
      event.overlay.mode = 'normal'
      return false
    },
    onRightClick: (event): boolean => {
      if (event.preventDefault)
        event.preventDefault()
      return false
    },
    onPressedMoveStart: (event): boolean => {
      executeCallback(properties.onMoveStart, event)

      return false
    },
    onPressedMoving: (event): boolean => {
      properties.price = (event.chart.convertFromPixel([{ y: event.y, x: event.x }], { paneId: 'candle_pane' }) as Partial<Point>).value
      executeCallback(properties.onMove, event)

      return false
    },
    onPressedMoveEnd: (event): boolean => {
      executeCallback(properties.onMoveEnd, event)

      return false
    },
    onClick: (event): boolean => {
      switch(event.figure?.key) {
        case 'cancel-button':
          executeCallback(properties.onCancel, event)
          break;
        case 'quantity':
          executeCallback(properties.onModify, event)
          break;
        default:
      }
      return false
    },

    setPrice(price: number) {
      properties.price = price
      return this as OrderOverlay
    },
    setText(text: string) {
      properties.text = text
      return this as OrderOverlay
    },
    setQuantity(quantity: number|string) {
      properties.quantity = quantity
      return this as OrderOverlay
    },
    setModifyTooltip(tooltip: string) {
      properties.modifyTooltip = tooltip
      return this as OrderOverlay
    },
    setTooltip(tooltip: string) {
      properties.tooltip = tooltip
      return this as OrderOverlay
    },

    setLineColor(color: string) {
      properties.lineColor = color
      return this as OrderOverlay
    },
    setLineWidth(width: number) {
      properties.lineWidth = width
      return this as OrderOverlay
    },
    setLineStyle(style: LineType) {
      properties.lineStyle = style
      return this as OrderOverlay
    },
    setLineLength(length: number) {
      properties.lineDashedValue = [length, length]
      return this as OrderOverlay
    },
    setLineDashedValue(dashedValue: number[]) {
      properties.lineDashedValue = dashedValue
      return this as OrderOverlay
    },

    setBodyFont(font: string) {
      properties.bodyFont = font
      return this as OrderOverlay
    },
    setBodyFontWeight(weight: FontWeights | number) {
      if (utils.isString(weight)) {
        weight = convertFontweightNameToNumber(weight as FontWeights)
      }
      properties.bodyWeight = weight
      return this as OrderOverlay
    },
    setBodyTextColor(color: string) {
      properties.bodyTextColor = color
      return this as OrderOverlay
    },
    setBodyBackgroundColor(color: string) {
      properties.bodyBackgroundColor = color
      return this as OrderOverlay
    },
    setBodyBorderColor(color: string) {
      properties.bodyBorderColor = color
      return this as OrderOverlay
    },

    setQuantityFont(font: string) {
      properties.quantityFont = font
      return this as OrderOverlay
    },
    setQuantityFontWeight(weight: FontWeights | number) {
      if (utils.isString(weight)) {
        weight = convertFontweightNameToNumber(weight as FontWeights)
      }
      properties.quantityWeight = weight
      return this as OrderOverlay
    },
    setQuantityColor(color: string) {
      properties.quantityColor = color
      return this as OrderOverlay
    },
    setQuantityBackgroundColor(color: string) {
      properties.quantityBackgroundColor = color
      return this as OrderOverlay
    },
    setQuantityBorderColor(color: string) {
      properties.quantityBorderColor = color
      return this as OrderOverlay
    },

    setCancelButtonFontWeight(weight: FontWeights | number) {
      if (utils.isString(weight)) {
        weight = convertFontweightNameToNumber(weight as FontWeights)
      }
      properties.cancelButtonWeight = weight
      return this as OrderOverlay
    },
    setCancelButtonIconColor(color: string) {
      properties.cancelButtonIconColor = color
      return this as OrderOverlay
    },
    setCancelButtonBackgroundColor(color: string) {
      properties.cancelButtonBackgroundColor = color
      return this as OrderOverlay
    },
    setCancelButtonBorderColor(color: string) {
      properties.cancelButtonBorderColor = color
      return this as OrderOverlay
    },

    setBorderStyle(style: LineType) {
      properties.borderStyle = style
      return this as OrderOverlay
    },
    setBorderSize(size: number) {
      properties.borderSize = size
      return this as OrderOverlay
    },
    setBorderDashedValue(dashedValue: number[]) {
      properties.borderDashedValue = dashedValue
      return this as OrderOverlay
    },
    setBorderRadius(radius: number) {
      properties.borderRadius = radius
      return this as OrderOverlay
    },

    onMoveStart<T>(params: T, callback: (params: T) => void) {
      properties.onMoveStart = {
        params: params,
        callback: callback as (params: unknown) => void,
      }
      return this as OrderOverlay
    },
    onMove<T>(params: T, callback: (params: T) => void) {
      properties.onMove = {
        params: params,
        callback: callback as (params: unknown) => void,
      }
      return this as OrderOverlay
    },
    onMoveEnd<T>(params: T, callback: (params: T) => void) {
      properties.onMoveEnd = {
        params: params,
        callback: callback as (params: unknown) => void,
      }
      return this as OrderOverlay
    },
    onCancel<T>(params: T, callback: (params: T) => void) {
      properties.onCancel = {
        params: params,
        callback: callback as (params: unknown) => void,
      }
      return this as OrderOverlay
    },
    onModify<T>(params: T, callback: (params: T) => void) {
      properties.onModify = {
        params: params,
        callback: callback as (params: unknown) => void,
      }
      return this as OrderOverlay
    }

  }
}

export default OrderLine