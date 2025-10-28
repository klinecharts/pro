import { Chart, Nullable, Overlay, YAxis } from "klinecharts"
import { FontWeights } from "./types/types"

export const getScreenSize = () => {
	return {x: window.innerWidth, y: window.innerHeight}
}

export const getPrecision = (chart: Chart, overlay: Overlay<unknown>, yAxis: Nullable<YAxis>):{ price: number, volume: number } => {
	const precision = {
		price: 0,
		volume: 0
	}

	const symbol = chart.getSymbol()
	if ((yAxis?.isInCandle() ?? true) && symbol) {
		precision.price = symbol.pricePrecision
		precision.volume = symbol.volumePrecision
	} else {
		const indicators = chart.getIndicators({ paneId: overlay.paneId })
		indicators.forEach(indicator => {
			precision.price = Math.max(precision.price, indicator.precision)
		})
	}

	return precision
}

export const convertFontweightNameToNumber = (weight: FontWeights): number => {
	const weights: { [key: string]: number } = {
		'thin': 100, 'extra-light': 200, 'light': 300, 'normal': 400, 'medium': 500, 'semi-bold': 600, 'bold': 700, 'extra-bold': 800, 'black': 900
	}

	return weights[weight]
}