import i18n from '../../../i18n'
import useDataSource from './dataSource'

const getIndicatorSettings = (locale:string) => {
  const { fill_stroke, font_size, font_weight, none_always_followCross } = useDataSource(locale)
  
	return [
		// {
    //   key: 'indicator.bars.style',
    //   text: i18n('Bar style', locale),
    //   component: 'select',
    //   dataSource: [
    //     { key: 'fill', text: i18n('Fill', locale) },
    //     { key: 'stroke', text: i18n('Stroke', locale) },
    //     { key: 'stroke_fill', text: i18n('Stroke fill', locale) }
    //   ]
    // },
    // {
    //   key: 'indicator.bars.borderStyle',
    //   text: i18n('Bar border style', locale),
    //   component: 'select',
    //   dataSource: [
    //     { key: 'solid', text: i18n('Solid', locale) },
    //     { key: 'dashed', text: i18n('Dashed', locale) }
    //   ]
    // },
    // {
    //   key: 'indicator.bars.borderSize',
    //   text: i18n('Bar border thickness', locale),
    //   component: 'select',
    //   dataSource: [
    //     { key: 1, text: 1},
    //     { key: 2, text: 2},
    //     { key: 3, text: 3},
    //     { key: 4, text: 4}
    //   ]
    // },
    {
      key: 'indicator.ohlc.upColor',
      text: i18n('Ohlc up-color', locale),
      component: 'color'
    },
    {
      key: 'indicator.ohlc.downColor',
      text: i18n('Ohlc down-color', locale),
      component: 'color'
    },
    {
      key: 'indicator.ohlc.noChangeColor',
      text: i18n('Ohlc no-change-color', locale),
      component: 'color'
    },
    {
      key: 'indicator.lastValueMark.show',
      text: i18n('indicator_last_value_show', locale),
      component: 'switch'
    },
    {
      key: 'indicator.lastValueMark.text.show',
      text: i18n('Show last value mark text', locale),
      component: 'switch'
    },
    {
      key: 'indicator.lastValueMark.text.style',
      text: i18n('Last value mark text style', locale),
      component: 'select',
      dataSource: fill_stroke
    },
    {
			key: 'indicator.lastValueMark.text.size',
			text: i18n('Last value mark text size', locale),
			component: 'select',
			dataSource: font_size
		},
    {
			key: 'indicator.lastValueMark.text.weight',
			text: i18n('Last value mark text Weight', locale),
			component: 'select',
			dataSource: font_weight
		},
    {
			key: 'indicator.lastValueMark.text.color',
			text: i18n('Last value mark text color', locale),
			component: 'color'
		},
    {
      key: 'indicator.tooltip.showRule',
      text: i18n('Tooltip showrule', locale),
      component: 'select',
      dataSource: none_always_followCross
    },
    {
      key: 'indicator.tooltip.showType',
      text: i18n('Tooltip showtype', locale),
      component: 'select',
      dataSource: [
        { key: 'standard', text: i18n('Standard', locale) },
        { key: 'rect', text: i18n('Rect', locale) }
      ]
    },
    {
      key: 'indicator.tooltip.showName',
      text: i18n('Show tooltip name', locale),
      component: 'switch'
    },
    {
      key: 'indicator.tooltip.showParams',
      text: i18n('Show tooltip params', locale),
      component: 'switch'
    },
    {
			key: 'indicator.tooltip.text.size',
			text: i18n('Tooltip text size', locale),
			component: 'select',
			dataSource: font_size
		},
    {
			key: 'indicator.tooltip.text.weight',
			text: i18n('Tooltip text Weight', locale),
			component: 'select',
			dataSource: font_weight
		},
    {
			key: 'indicator.tooltip.text.color',
			text: i18n('Tooltip text color', locale),
			component: 'color',
		}
	]
}

export default getIndicatorSettings