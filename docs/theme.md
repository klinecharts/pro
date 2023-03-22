# 主题定制
图表内置了`dark`和`light`两种主题，默认是`light`。如果需要定制其它主题，需要完成核心图表的样式定制和css的定制。

## 核心图表的定制
通过api `setStyles(styles)`设置。

## css相关样式
css样式采用css变量控制颜色，具体如下，
```css
.klinecharts-pro {
  /* 亮色主题颜色 */
  --klinecharts-pro-primary-color: #1677ff;
  --klinecharts-pro-hover-background-color: rgba(22, 119, 255, 0.15);
  --klinecharts-pro-background-color: #FFFFFF;
  --klinecharts-pro-popover-background-color: #FFFFFF;
  --klinecharts-pro-text-color: #051441;
  --klinecharts-pro-text-second-color: #76808F;
  --klinecharts-pro-border-color: #ebedf1;
  --klinecharts-pro-selected-color: rgba(22, 119, 255, 0.15);
}

/* 暗色主题颜色 */
.klinecharts-pro[data-theme="dark"] {
  --klinecharts-pro-hover-background-color: rgba(22, 119, 255, 0.15);
  --klinecharts-pro-background-color: #151517;;
  --klinecharts-pro-popover-background-color: #1c1c1f;;
  --klinecharts-pro-text-color: #F8F8F8;
  --klinecharts-pro-text-second-color: #929AA5;
  --klinecharts-pro-border-color: #292929;
}
```
