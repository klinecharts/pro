# 数据说明

## 周期
```typescript
interface Period {
  // 时间跨度乘数，如1，3，5
  multiplier: number;

  // 时间跨度，如'year'，'month'
  timespan: string;

  // 文字，用于显示，如'1H'，'5H'
  text: string;
}
```

## 标的信息
```typescript
interface SymbolInfo {
  // 唯一标识
  ticker: string;

  // 标的名
  name?: string

  // 标的简短名
  shortName?: string

  // 交易所
  exchange?: string

  // 市场分类
  market?: string

  // 价格精度
  pricePrecision?: number

  // 数量精度
  volumePrecision?: number

  // 价格币种
  priceCurrency?: string

  // 类型
  type?: string

  // logo url
  logo?: string
}
```