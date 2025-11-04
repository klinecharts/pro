import i18n from '../../../i18n'
import useDataSource from './dataSource'

const getYAxisSettings = (locale:string) => {
  const { size, font_weight, font_size } = useDataSource(locale)
	return [
		{
      key: 'yAxis.show',
      text: i18n('Show yAxis', locale),
      component: 'switch',
    },
    {
      key: 'yAxis.position',
      text: i18n('Position', locale),
      component: 'select',
      dataSource: [
        { key: 'right', text: i18n('Right', locale) },
        { key: 'left', text: i18n('Left', locale) }
      ],
    },
    {
      key: 'yAxis.type',
      text: i18n('price_axis_type', locale),
      component: 'select',
      dataSource: [
        { key: 'normal', text: i18n('normal', locale) },
        { key: 'percentage', text: i18n('percentage', locale) },
        { key: 'log', text: i18n('log', locale) }
      ],
    },
    {
      key: 'yAxis.inside',
      text: i18n('Inside', locale),
      component: 'switch',
    },
    {
      key: 'yAxis.reverse',
      text: i18n('reverse_coordinate', locale),
      component: 'switch',
    },
    {
      key: 'yAxis.axisLine.show',
      text: i18n('Show axis line', locale),
      component: 'switch',
    },
    {
      key: 'yAxis.axisLine.size',
      text: i18n('Axis line size', locale),
      component: 'select',
      dataSource: size
    },
    {
      key: 'yAxis.axisLine.color',
      text: i18n('Axis line color', locale),
      component: 'color'
    },
    {
      key: 'yAxis.tickText.show',
      text: i18n('Show tick text', locale),
      component: 'switch',
    },
    {
      key: 'yAxis.tickText.color',
      text: i18n('Tick text color', locale),
      component: 'color'
    },
    {
			key: 'yAxis.tickText.size',
			text: i18n('Tick text size', locale),
			component: 'select',
			dataSource: font_size
		},
    {
			key: 'yAxis.tickText.weight',
			text: i18n('Tick text Weight', locale),
			component: 'select',
			dataSource: font_weight
		},
    {
      key: 'yAxis.tickLine.show',
      text: i18n('Show tick line', locale),
      component: 'switch',
    },
    {
      key: 'yAxis.tickLine.color',
      text: i18n('Tick line color', locale),
      component: 'color',
    },
    {
      key: 'yAxis.tickLine.size',
      text: i18n('Tick line size', locale),
      component: 'select',
      dataSource: size
    },
    {
      key: 'yAxis.tickLine.length',
      text: i18n('Tick line length', locale),
      component: 'select',
      dataSource: size
    }
	]
}

export default getYAxisSettings