import i18n from '../../../i18n'

const useDataSource = (locale:string) => {
  const solid_dashed = [
    { key: 'solid', text: i18n('solid', locale) },
    { key: 'dashed', text: i18n('dashed', locale) }
  ]
  const dashed_value = [
    { key: [4, 4]}
  ]
  const true_false = [
    { key: 'true', text: true },
    { key: 'false', text: false }
  ]
  const size = [
    { key: 1, text: 1 },
    { key: 2, text: 2 },
    { key: 3, text: 3 },
    { key: 4, text: 4 },
    { key: 5, text: 5 },
    { key: 6, text: 6 },
    { key: 7, text: 7 },
    { key: 8, text: 8 },
    { key: 9, text: 9 },
    { key: 10, text: 10 },
    { key: 11, text: 11 },
    { key: 12, text: 12 },
    { key: 13, text: 13 },
    { key: 14, text: 14 },
    { key: 15, text: 15 }
  ]
  const fill_stroke = [
    { key: 'fill', text: i18n('fill', locale) },
    { key: 'stroke', text: i18n('stroke', locale) },
    { key: 'stroke_fill', text: i18n('stroke_fill', locale) }
  ]
  const none_always_followCross = [
    { key: 'none', text: i18n('none', locale) },
    { key: 'always', text: i18n('always', locale) },
    { key: 'follow_cross', text: i18n('follow_cross', locale) }
  ]
  const font_size = [
    { key: 10, text: 10 },
    { key: 11, text: 11 },
    { key: 12, text: 12 },
    { key: 14, text: 14 },
    { key: 16, text: 16 },
    { key: 18, text: 18 },
    { key: 20, text: 20 },
    { key: 22, text: 22 },
    { key: 24, text: 24 },
  ]
  const font_weight = [
    { key: 'normal', text: i18n('Normal', locale) }
  ]
  const font_family = [
    { key: 'Helvetica Neue', text: i18n('Helvetica Neue', locale) }
  ]

	return {solid_dashed, dashed_value, size, fill_stroke, font_family, font_size, font_weight, none_always_followCross, true_false}
}

export default useDataSource