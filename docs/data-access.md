# 接入数据
可以使用默认的数据，和自定义数据完成数据接入。

## 使用默认数据
默认数据来源于 https://polygon.io/ ，在使用前需要去申请API key。申请完成后，通过内置`DefaultDatafeed`这个类完成数据接入。
示例：
```typescript
import { KLineChartPro, DefaultDatafeed } from '@klinecharts/pro'
const chart = new KLineChartPro({
  container: document.getElementById('container'),
  datafeed: new DefaultDatafeed(`${polygonIoApiKey}`)
})
```

## 使用自定义数据
需要使用自定义数据，只需要按如下步骤即可。

### 第一步，实现数据接入API
```typescript
class CustomDatafeed {
  /**
   * 模糊搜索标的
   * 在搜索框输入的时候触发
   * 返回标的信息数组
   */
  searchSymbols (search?: string): Promise<SymbolInfo[]> {
    // 根据模糊字段远程拉取标的数据
  }

  /**
   * 获取历史k线数据
   * 当标的和周期发生变化的时候触发
   * 
   * 返回标的k线数据数组
   */
  getHistoryKLineData (symbol: SymbolInfo, period: Period, from: number, to: number): Promise<KLineData[]> {
    // 完成数据请求
  }

  /**
   * 订阅标的在某个周期的实时数据
   * 当标的和周期发生变化的时候触发
   * 
   * 通过callback告知图表接收数据
   */
  subscribe (symbol: SymbolInfo, period: Period, callback: DatafeedSubscribeCallback): void {
    // 完成ws订阅或者http轮询
  }

  /**
   * 取消订阅标的在某个周期的实时数据
   * 当标的和周期发生变化的时候触发
   * 
   */ 
  unsubscribe (symbol: SymbolInfo, period: Period): void {
    // 完成ws订阅取消或者http轮询取消
  }
}
```

### 第二步，接入自定义数据
```typescript
import { KLineChartPro, DefaultDatafeed } from '@klinecharts/pro'
const chart = new KLineChartPro({
  container: document.getElementById('container'),
  datafeed: new CustomDatafeed()
})
```