import i18n from '../../../i18n'
import useDataSource from './dataSource'

const getXAxisSettings = (locale:string) => {
  const { font_size, size, font_weight } = useDataSource(locale)
	return [
		{
      key: 'xAxis.show',
      text: i18n('Show xAxis', locale),
      component: 'switch',
    },
    {
      key: 'xAxis.axisLine.show',
      text: i18n('Show axis line', locale),
      component: 'switch',
    },
    {
			key: 'xAxis.axisLine.color',
			text: i18n('Axis line color', locale),
			component: 'color',
		},
    {
      key: 'xAxis.axisLine.size',
      text: i18n('Axis line size', locale),
      component: 'select',
      dataSource: size
    },
    {
      key: 'xAxis.tickText.show',
      text: i18n('Show tick text', locale),
      component: 'switch',
    },
    {
			key: 'xAxis.tickText.size',
			text: i18n('Tick text size', locale),
			component: 'select',
			dataSource: font_size
		},
    {
			key: 'xAxis.tickText.weight',
			text: i18n('Tick text Weight', locale),
			component: 'select',
			dataSource: font_weight
		},
    {
			key: 'xAxis.tickText.color',
			text: i18n('Tick text color', locale),
			component: 'color',
		},
    {
      key: 'xAxis.tickLine.show',
      text: i18n('Show tick line', locale),
      component: 'switch',
    },
    {
      key: 'xAxis.tickLine.size',
      text: i18n('Tick line size', locale),
      component: 'select',
      dataSource: size
    },
    {
      key: 'xAxis.tickLine.length',
      text: i18n('Tick line length', locale),
      component: 'select',
      dataSource: size
    },
    {
      key: 'xAxis.tickLine.color',
      text: i18n('Tick line color', locale),
      component: 'color'
    }
	]
}

export default getXAxisSettings