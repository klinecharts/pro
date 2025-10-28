/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-icon-close': '&#xe900;',
		'icon-icon-invisible': '&#xe901;',
		'icon-icon-setting': '&#xe902;',
		'icon-icon-visible': '&#xe903;',
		'icon-lock': '&#xe98f;',
		'icon-unlocked': '&#xe990;',
		'icon-bin': '&#xe9ac;',
		'icon-plus': '&#xea0a;',
		'icon-minus': '&#xea0b;',
		'icon-cancel-circle': '&#xea0d;',
		'icon-blocked': '&#xea0e;',
		'icon-cross': '&#xea0f;',
		'icon-checkmark': '&#xea10;',
		'icon-checkmark2': '&#xea11;',
		'icon-enter': '&#xea13;',
		'icon-exit': '&#xea14;',
		'icon-circle-down': '&#xea43;',
		'icon-circle-left': '&#xea44;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
