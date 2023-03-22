# Access data
You can use default data and custom data to complete data access.

## Use default data
The default data source is https://polygon.io/. You need to apply for an API key before using it. After the application is completed, data access is completed through the built-in `DefaultDatafeed` class.
Sample,
```typescript
import { KLineChartPro, DefaultDatafeed } from '@klinecharts/pro'
const chart = new KLineChartPro({
  container: document.getElementById('container'),
  datafeed: new DefaultDatafeed(`${polygonIoApiKey}`)
})
```

## Use custom data
To use custom data, just follow the steps below.

### Step 1: Implement the data access API
```typescript
class CustomDatafeed {
  /**
   * Fuzzy search symbols
   * Triggered when the search box is entered
   * Returns an array of symbol information
   */
  searchSymbols (search?: string): Promise<SymbolInfo[]> {
    // Remote pull of symbol data based on fuzzy fields
  }

  /**
   * Pull historical k-line data
   * Triggered when the symbol and period change
   * 
   * Returns the symbol k-line data array
   */
  getHistoryKLineData (symbol: SymbolInfo, period: Period, from: number, to: number): Promise<KLineData[]> {
    // Complete data request
  }

  /**
   * Subscribe to real-time data of the symbol in a certain period
   * Triggered when the symbol and period change
   * 
   * Notify chart to receive data through callback
   */
  subscribe (symbol: SymbolInfo, period: Period, callback: DatafeedSubscribeCallback): void {
    // Complete ws subscription or http polling
  }

  /**
   * Unsubscribe to real-time data of the symbol in a certain period
   * Triggered when the symbol and period change
   * 
   */ 
  unsubscribe (symbol: SymbolInfo, period: Period): void {
    // Complete ws subscription cancellation or http polling cancellation
  }
}
```

### Step 2: Access custom data
```typescript
import { KLineChartPro, DefaultDatafeed } from '@klinecharts/pro'
const chart = new KLineChartPro({
  container: document.getElementById('container'),
  datafeed: new CustomDatafeed()
})
```