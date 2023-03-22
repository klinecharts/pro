# Theme customization
The chart has two built-in themes, `dark` and `light`, and the default is `light`. If you need to customize other topics, you need to complete the style customization of the core chart and the customization of the CSS.

## Customization of core chart
Set through the API `setStyles(styles)`.

## CSS related styles
The css style uses css variables to control the color, as follows,
```css
.klinecharts-pro {
  /* Light theme colors */
  --klinecharts-pro-primary-color: #1677ff;
  --klinecharts-pro-hover-background-color: rgba(22, 119, 255, 0.15);
  --klinecharts-pro-background-color: #FFFFFF;
  --klinecharts-pro-popover-background-color: #FFFFFF;
  --klinecharts-pro-text-color: #051441;
  --klinecharts-pro-text-second-color: #76808F;
  --klinecharts-pro-border-color: #ebedf1;
  --klinecharts-pro-selected-color: rgba(22, 119, 255, 0.15);
}

/* Dark theme colors  */
.klinecharts-pro[data-theme="dark"] {
  --klinecharts-pro-hover-background-color: rgba(22, 119, 255, 0.15);
  --klinecharts-pro-background-color: #151517;;
  --klinecharts-pro-popover-background-color: #1c1c1f;;
  --klinecharts-pro-text-color: #F8F8F8;
  --klinecharts-pro-text-second-color: #929AA5;
  --klinecharts-pro-border-color: #292929;
}
```
