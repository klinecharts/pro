# API

## Creating chart
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
+ `container` Container id or container
+ `styles` Core chart styles
+ `watermark` Watermark
+ `theme` Theme
+ `locale` Language
+ `drawingBarVisible` Whether to display the drawing toolbar
+ `symbol` Symbol
+ `period` Period
+ `periods` All periods
+ `timezone` Timezone
+ `mainIndicators` Main indicators
+ `subIndicators` Sub indicators
+ `datafeed` Data access API implementation

## Chart API
### setTheme(theme)
```typescript
(theme: string) => void
```
Set theme.

### getTheme()
```typescript
() => string
```
Get theme.

### setStyles(styles)
```typescript
(styles: DeepPartial<Styles>) => void
```
Set core chart styles.

### getStyles()
```typescript
() => Styles
```
Get core chart styles.

### setLocale(locale)
```typescript
(locale: string) => void
```
Set language.

### getLocale()
```typescript
() => string
```
Get language.

### setTimezone(timezone)
```typescript
(timezone: string) => void
```
Set timezone.

### getTimezone()
```typescript
() => string
```
Get timezone.

### setSymbol(symbol)
```typescript
(symbol: SymbolInfo) => void
```
Set symbol

### getSymbol()
```typescript
() => SymbolInfo
```
Get symbol.

### setPeriod(period)
```typescript
(period: Period) => void
```
Set period.

### getPeriod()
```typescript
() => Period
```
Get period.
