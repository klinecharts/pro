import i18n from '../../../i18n'
import useDataSource from './dataSource'

const getCandleSettings = (locale:string) => {
	const { font_family, font_size, font_weight, size, solid_dashed, fill_stroke, none_always_followCross } = useDataSource(locale)
	return [
		{
			key: 'candle.type',
			text: i18n('candle_type', locale),
			component: 'select',
			dataSource: [
				{ key: 'candle_solid', text: i18n('candle_solid', locale) },
				{ key: 'candle_stroke', text: i18n('candle_stroke', locale) },
				{ key: 'candle_up_stroke', text: i18n('candle_up_stroke', locale) },
				{ key: 'candle_down_stroke', text: i18n('candle_down_stroke', locale) },
				{ key: 'ohlc', text: i18n('ohlc', locale) },
				{ key: 'area', text: i18n('area', locale) }
			]
		},
		{
      key: 'candle.bar.upColor',
      text: i18n('Bar up color', locale),
      component: 'color'
    },
		{
      key: 'candle.bar.downColor',
      text: i18n('Bar down color', locale),
      component: 'color'
    },
		{
      key: 'candle.bar.noChangeColor',
      text: i18n('Bar no-change color', locale),
      component: 'color'
    },
		{
      key: 'candle.bar.upBorderColor',
      text: i18n('Bar up-border color', locale),
      component: 'color'
    },
		{
      key: 'candle.bar.downBorderColor',
      text: i18n('Bar down-border color', locale),
      component: 'color'
    },
		{
      key: 'candle.bar.noChangeBorderColor',
      text: i18n('Bar no-change-border color', locale),
      component: 'color'
    },
		{
      key: 'candle.bar.upWickColor',
      text: i18n('Bar up-wick color', locale),
      component: 'color'
    },
		{
      key: 'candle.bar.downWickColor',
      text: i18n('Bar down-wick color', locale),
      component: 'color'
    },
		{
      key: 'candle.bar.noChangeWickColor',
      text: i18n('Bar no-change-wick color', locale),
      component: 'color'
    },
		{
			key: 'candle.area.lineSize',
			text: i18n('Area linesize', locale),
			component: 'select',
			dataSource: size
		},
		{
      key: 'candle.area.lineColor',
      text: i18n('Area line color', locale),
      component: 'color'
    },

		{
			key: 'candle.priceMark.high.show',
			text: i18n('high_price_show', locale),
			component: 'switch'
		},
		{
			key: 'candle.priceMark.high.color',
			text: i18n('Pricemark high color', locale),
			component: 'color'
		},
		{
			key: 'candle.priceMark.high.textSize',
			text: i18n('Pricemark High Textsize', locale),
			component: 'select',
			dataSource: font_size
		},
		{
			key: 'candle.priceMark.high.textFamily',
			text: i18n('Pricemark High Font family', locale),
			component: 'select',
			dataSource: font_family
		},
		{
			key: 'candle.priceMark.high.textWeight',
			text: i18n('Pricemark High Font Weight', locale),
			component: 'select',
			dataSource: font_weight
		},
		{
			key: 'candle.priceMark.low.show',
			text: i18n('low_price_show', locale),
			component: 'switch'
		},
		{
			key: 'candle.priceMark.low.color',
			text: i18n('Pricemark low color', locale),
			component: 'color'
		},
		{
			key: 'candle.priceMark.low.textSize',
			text: i18n('Pricemark Low Textsize', locale),
			component: 'select',
			dataSource: font_size
		},
		{
			key: 'candle.priceMark.low.textFamily',
			text: i18n('Pricemark Low Font family', locale),
			component: 'select',
			dataSource: font_family
		},
		{
			key: 'candle.priceMark.low.textWeight',
			text: i18n('Pricemark Low Font Weight', locale),
			component: 'select',
			dataSource: font_weight
		},
		{
			key: 'candle.priceMark.last.show',
			text: i18n('Show Pricemark last', locale),
			component: 'switch'
		},
		{
			key: 'candle.priceMark.last.upColor',
			text: i18n('Pricemark last up-color', locale),
			component: 'color'
		},
		{
			key: 'candle.priceMark.last.downColor',
			text: i18n('Pricemark last down-color', locale),
			component: 'color'
		},
		{
			key: 'candle.priceMark.last.noChangeColor',
			text: i18n('Pricemark last no-change-color', locale),
			component: 'color'
		},
		{
			key: 'candle.priceMark.last.line.show',
			text: i18n('Show Pricemark last line', locale),
			component: 'switch'
		},
		{
			key: 'candle.priceMark.last.line.style',
			text: i18n('Pricemark last line style', locale),
			component: 'select',
			dataSource: solid_dashed
		},
		{
			key: 'candle.priceMark.last.line.size',
			text: i18n('Pricemark last line size', locale),
			component: 'select',
			dataSource: size
		},
		{
			key: 'candle.priceMark.last.text.show',
			text: i18n('Show Pricemark last text', locale),
			component: 'switch'
		},
		{
			key: 'candle.priceMark.last.text.style',
			text: i18n('Pricemark last text style', locale),
			component: 'select',
			dataSource: fill_stroke
		},
		{
			key: 'candle.priceMark.last.text.size',
			text: i18n('Pricemark last text size', locale),
			component: 'select',
			dataSource: font_size
		},
		{
			key: 'candle.priceMark.last.text.color',
			text: i18n('Pricemark last text color', locale),
			component: 'color'
		},
			// candle tooltip
		{
			key: 'candle.tooltip.showRule',
			text: i18n('candle_tooltip', locale),
			component: 'select',
			dataSource: none_always_followCross
		},
		{
			key: 'candle.tooltip.showType',
			text: i18n('Tooltip showtype', locale),
			component: 'select',
			dataSource: [
				{ key: 'rect', text: i18n('Rect', locale) },
				{ key: 'standard', text: i18n('Standard', locale) }
			]
		},
		{
			key: 'candle.tooltip.rect.position',
			text: i18n('Tooltip rect position', locale),
			component: 'select',
			dataSource: [
				{ key: 'fixed', text: i18n('Fixed', locale) },
				{ key: 'pointer', text: i18n('Pointer', locale) }
			]
		},
		{
			key: 'candle.tooltip.rect.color',
			text: i18n('Tooltip rect color', locale),
			component: 'color',
		},
		{
			key: 'candle.tooltip.rect.borderColor',
			text: i18n('Tooltip rect border-color', locale),
			component: 'color',
		},
		{
			key: 'candle.tooltip.text.size',
			text: i18n('Tooltip text size', locale),
			component: 'select',
			dataSource: font_size
		},
		{
			key: 'candle.tooltip.text.weight',
			text: i18n('Tooltip text weight', locale),
			component: 'select',
			dataSource: font_weight
		},
		{
			key: 'candle.tooltip.text.color',
			text: i18n('Tooltip text color', locale),
			component: 'color',
		}
	]
}

export default getCandleSettings