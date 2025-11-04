import { LineStyle, StateTextStyle } from 'klinecharts';
import { createSignal } from 'solid-js';

export const [buyStyle, setBuyStyle] = createSignal<{ lineStyle: LineStyle, labelStyle: StateTextStyle}>({
	lineStyle: {
		style: 'dashed',
		size: 1,
		color: '#00698b',
		dashedValue: [4, 4]
	},
	labelStyle: {
		style: 'stroke_fill',
		size: 12,
		family:'Helvetica Neue',
		weight: 'normal',
		paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 5,
		paddingTop: 5,
		borderStyle: 'solid',
		borderSize: 1,
		borderDashedValue: [0,0],
		borderRadius: 3,
		color: '#FFFFFF',
		borderColor: '#00698b',
		backgroundColor: '#00698b',
		show: true,
	}
})

export const [buyLimitStyle, setBuyLimitStyle] = createSignal({
	lineStyle: {
		style: 'dashed',
		size: 1,
		color: '#00698b',
		dashedValue: [4, 4]
	},
	labelStyle: {
		style: 'fill',
		size: 12,
		family:'Helvetica Neue',
		weight: 'normal',
		paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 5,
		paddingTop: 5,
		borderStyle: 'solid',
		borderSize: 1,
		color: '#FFFFFF',
		borderColor: '#00698b',
		backgroundColor: '#00698b'
	}
})

export const [buyStopStyle, setBuyStopStyle] = createSignal({
	lineStyle: {
		style: 'dashed',
		size: 1,
		color: '#00698b',
		dashedValue: [4, 4]
	},
	labelStyle: {
		style: 'fill',
		size: 12,
		family:'Helvetica Neue',
		weight: 'normal',
		paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 5,
		paddingTop: 5,
		borderStyle: 'solid',
		borderSize: 1,
		color: '#FFFFFF',
		borderColor: '#00698b',
		backgroundColor: '#00698b'
	}
})

export const [sellStyle, setSellStyle] = createSignal({
	lineStyle: {
		style: 'dashed',
		size: 1,
		color: '#fb7b50',
		dashedValue: [4, 4]
	},
	labelStyle: {
		style: 'fill',
		size: 12,
		family:'Helvetica Neue',
		weight: 'normal',
		paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 5,
		paddingTop: 5,
		borderStyle: 'solid',
		borderSize: 1,
		color: '#FFFFFF',
		borderColor: '#00698b',
		backgroundColor: '#fb7b50'
	}
})

export const [sellLimitStyle, setSellLimitStyle] = createSignal({
	lineStyle: {
		style: 'dashed',
		size: 1,
		color: '#fb7b50',
		dashedValue: [4, 4]
	},
	labelStyle: {
		style: 'fill',
		size: 12,
		family:'Helvetica Neue',
		weight: 'normal',
		paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 5,
		paddingTop: 5,
		borderStyle: 'solid',
		borderSize: 1,
		color: '#FFFFFF',
		borderColor: '#00698b',
		backgroundColor: '#fb7b50'
	}
})

export const [sellStopStyle, setSellStopStyle] = createSignal({
	lineStyle: {
		style: 'dashed',
		size: 1,
		color: '#fb7b50',
		dashedValue: [4, 4]
	},
	labelStyle: {
		style: 'fill',
		size: 12,
		family:'Helvetica Neue',
		weight: 'normal',
		paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 5,
		paddingTop: 5,
		borderStyle: 'solid',
		borderSize: 1,
		color: '#FFFFFF',
		borderColor: '#00698b',
		backgroundColor: '#fb7b50'
	}
})

export const [takeProfitStyle, setTakeProfitStyle] = createSignal({
	lineStyle: {
		style: 'dashed',
		size: 1,
		color: '#00698b',
		dashedValue: [4, 4]
	},
	labelStyle: {
		style: 'fill',
		size: 12,
		family:'Helvetica Neue',
		weight: 'normal',
		paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 5,
		paddingTop: 5,
		borderStyle: 'solid',
		borderSize: 1,
		color: '#FFFFFF',
		borderColor: '#00698b',
		backgroundColor: '#00698b'
	}
})

export const [stopLossStyle, setStopLossStyle] = createSignal({
	lineStyle: {
		style: 'dashed',
		size: 1,
		color: '#fb7b50',
		dashedValue: [4, 4]
	},
	labelStyle: {
		style: 'fill',
		size: 12,
		family:'Helvetica Neue',
		weight: 'normal',
		paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 5,
		paddingTop: 5,
		borderStyle: 'solid',
		borderSize: 1,
		color: '#FFFFFF',
		borderColor: '#00698b',
		backgroundColor: '#fb7b50'
	}
})