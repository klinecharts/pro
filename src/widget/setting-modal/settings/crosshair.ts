import i18n from '../../../i18n'
import useDataSource from './dataSource'

const getCrosshairSettings = (locale:string) => {
	const { solid_dashed, dashed_value, fill_stroke, size, font_size, font_weight } = useDataSource(locale)
	return [
		{
      key: 'crosshair.show',
      text: i18n('Show Crosshair', locale),
      component: 'switch',
    },
    {
      key: 'crosshair.horizontal.show',
      text: i18n('Show horizontal', locale),
      component: 'switch',
    },
    {
      key: 'crosshair.horizontal.line.show',
      text: i18n('Show horizontal line', locale),
      component: 'switch',
    },
    {
      key: 'crosshair.horizontal.line.style',
      text: i18n('Horizontal Line Style', locale),
      component: 'select',
      dataSource: solid_dashed
    },
    {
      key: 'crosshair.horizontal.line.dashed_value',
      text: i18n('Horizontal Line Style', locale),
      component: 'select',
      dataSource: dashed_value
    },
    {
      key: 'crosshair.horizontal.line.size',
      text: i18n('Horizontal Line size', locale),
      component: 'select',
      dataSource: size
    },
    {
      key: 'crosshair.horizontal.line.color',
      text: i18n('Horizontal Line color', locale),
      component: 'color'
    },
    {
      key: 'crosshair.horizontal.text.show',
      text: i18n('Show horizontal text', locale),
      component: 'switch',
    },
    {
      key: 'crosshair.horizontal.text.style',
      text: i18n('Horizontal text Style', locale),
      component: 'select',
      dataSource: fill_stroke
    },
    {
      key: 'crosshair.horizontal.text.size',
      text: i18n('Horizontal text size', locale),
      component: 'select',
      dataSource: font_size
    },
    {
      key: 'crosshair.horizontal.text.weight',
      text: i18n('Horizontal text weight', locale),
      component: 'select',
      dataSource: font_weight
    },
    {
      key: 'crosshair.horizontal.text.color',
      text: i18n('Horizontal text color', locale),
      component: 'color'
    },
    {
      key: 'crosshair.horizontal.text.backgroundColor',
      text: i18n('Horizontal text background color', locale),
      component: 'color'
    },
    {
      key: 'crosshair.vertical.show',
      text: i18n('Show vertical', locale),
      component: 'switch',
    },
    {
      key: 'crosshair.vertical.line.show',
      text: i18n('Show vertical line', locale),
      component: 'switch',
    },
    {
      key: 'crosshair.vertical.line.style',
      text: i18n('Vertical Line Style', locale),
      component: 'select',
      dataSource: solid_dashed
    },
    {
      key: 'crosshair.vertical.line.size',
      text: i18n('Vertical Line size', locale),
      component: 'select',
      dataSource: size
    },
    {
      key: 'crosshair.vertical.line.size',
      text: i18n('Vertical Line size', locale),
      component: 'select',
      dataSource: size
    },
    {
      key: 'crosshair.vertical.line.color',
      text: i18n('Vertical line color', locale),
      component: 'color'
    },
    {
      key: 'crosshair.vertical.text.show',
      text: i18n('Show vertical text', locale),
      component: 'switch',
    },
    {
      key: 'crosshair.vertical.text.style',
      text: i18n('Vertical text Style', locale),
      component: 'select',
      dataSource: fill_stroke
    },
    {
      key: 'crosshair.vertical.text.size',
      text: i18n('Vertical text size', locale),
      component: 'select',
      dataSource: font_size
    },
    {
      key: 'crosshair.vertical.text.weight',
      text: i18n('Vertical text weight', locale),
      component: 'select',
      dataSource: font_weight
    },
    {
      key: 'crosshair.vertical.text.color',
      text: i18n('Vertical text color', locale),
      component: 'color'
    },
    {
      key: 'crosshair.vertical.text.backgroundColor',
      text: i18n('Vertical text background color', locale),
      component: 'color'
    },
	]
}

export default getCrosshairSettings