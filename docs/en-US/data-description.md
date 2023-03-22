# Data Description

## Period
```typescript
interface Period {
  // Time span multiplier, such as 1, 3, 5
  multiplier: number;

  // Time span, such as 'year', 'month'
  timespan: string;

  // Text for display, such as '1H', '5H'
  text: string;
}
```

## Symbol information
```typescript
interface SymbolInfo {
  // Unique identification
  ticker: string;

  // Name
  name?: string

  // Short name
  shortName?: string

  // Exchange
  exchange?: string

  // Market classification
  market?: string

  // Price precision
  pricePrecision?: number

  // Volume precision
  volumePrecision?: number

  // Price currency
  priceCurrency?: string

  // Type
  type?: string

  // logo url
  logo?: string
}
```