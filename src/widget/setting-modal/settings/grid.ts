import i18n from '../../../i18n'
import useDataSource from './dataSource'

const getGridSettings = (locale:string) => {
  const { size } = useDataSource(locale)
	return [
		{
      key: 'grid.show',
      text: i18n('grid_show', locale),
      component: 'switch',
    },
    {
      key: 'grid.horizontal.show',
      text: i18n('Show horizontal', locale),
      component: 'switch',
    },
    {
      key: 'grid.horizontal.show',
      text: i18n('Horizontal size', locale),
      component: 'select',
      dataSource: size
    },
    {
      key: 'grid.horizontal.color',
      text: i18n('Horizontal color', locale),
      component: 'color'
    },
    {
      key: 'grid.vertical.show',
      text: i18n('Show vertical', locale),
      component: 'switch',
    },
    {
      key: 'grid.vertical.show',
      text: i18n('Vertical size', locale),
      component: 'select',
      dataSource: size
    },
    {
      key: 'grid.vertical.color',
      text: i18n('Vertical color', locale),
      component: 'color'
    }
	]
}

export default getGridSettings