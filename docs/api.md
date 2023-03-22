# API

## 创建图表对象
```typescript
new KLineChartPro(
  options: {
    container: string | HTMLElement;
    styles?: DeepPartial<Styles>;
    watermark?: string | Node;
    theme?: string;
    locale?: string;
    drawingBarVisible?: boolean;
    symbol: SymbolInfo;
    period: Period;
    periods?: Period[];
    timezone?: string;
    mainIndicators?: string[];
    subIndicators?: string[];
    datafeed: Datafeed;
  }
) => KLineChartPro
```
+ `container` 容器id或者容器
+ `styles` 核心图表样式
+ `watermark` 水印
+ `theme` 主题
+ `locale` 语言类型
+ `drawingBarVisible` 是否显示画线工具栏
+ `symbol` 标的
+ `period` 当前周期
+ `periods` 所以周期
+ `timezone` 时区
+ `mainIndicators` 主图指标
+ `subIndicators` 副图指标
+ `datafeed` 数据接入api实现

## 图表API
### setTheme(theme)
```typescript
(theme: string) => void
```
设置主题

### getTheme()
```typescript
() => string
```
获取主题

### setStyles(styles)
```typescript
(styles: DeepPartial<Styles>) => void
```
设置核心图表样式

### getStyles()
```typescript
() => Styles
```
获取核心图表样式

### setLocale(locale)
```typescript
(locale: string) => void
```
设置语言

### getLocale()
```typescript
() => string
```
获取语言

### setTimezone(timezone)
```typescript
(timezone: string) => void
```
设置时区

### getTimezone()
```typescript
() => string
```
获取时区

### setSymbol(symbol)
```typescript
(symbol: SymbolInfo) => void
```
设置标的

### getSymbol()
```typescript
() => SymbolInfo
```
获取标的

### setPeriod(period)
```typescript
(period: Period) => void
```
设置周期

### getPeriod()
```typescript
() => Period
```
获取周期
