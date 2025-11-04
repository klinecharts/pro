import { Nullable } from "klinecharts";
import { OrderInfo, OrderModalType, OrderModifyInfo, OrderPlacedCallback, OrderResource, OrderType } from "./types/types";

export default class DummyOrderController implements OrderResource {
  constructor (storage_name = 'dummy_order_controller') {
    this.storage_name = storage_name
  }

  private storage_name: string

  async retrieveOrder(order_id: number): Promise<Nullable<OrderInfo>> {
    return this.retrieveOrderFromLs(order_id)
  }

  async retrieveOrders(action?: OrderType, account_id?: number): Promise<OrderInfo[]> {
    let orders = this.retrieveOrdersFromLs()

    if (action)
      orders = orders.filter((o, i) => o.action == action)

    if (account_id)
      orders = orders.filter(o => o.accountId == account_id)

    return orders
  }

  async openOrder(action: OrderType, size: number, entry: number, stop_loss?: number, take_profit?: number): Promise<OrderInfo|null> {
    const orders = this.retrieveOrdersFromLs()

    const order = {
      orderId: orders.length ? orders.at(orders.length - 1)!.orderId + 1 : 0,
      action: action,
      entryPoint: entry,
      exitPoint: undefined,
      stopLoss: stop_loss,
      takeProfit: take_profit,
      lotSize: size,
      pips: 0,
      pl: 0,
      entryTime: new Date().getTime().toString(),
      exitTime: undefined,
      exitType: undefined,
      partials: undefined
    }
    this.storeOrder(order, orders)
    return order
  }

  async closeOrder(order_id: number, lotsize?: number): Promise<OrderInfo|null> {
    try {
      const orders = this.retrieveOrdersFromLs()
      const index = orders.findIndex(o => o.orderId == order_id)
      if (index < 0)
        return null

      const order = orders[index]

      if (!lotsize || lotsize > order.lotSize)
        lotsize = order.lotSize

      order.lotSize -= lotsize
      this.storeOrder(order, orders, index)
      return order
    } catch (err) {
      return null
    }
  }

  async modifyOrder(_order: OrderModifyInfo): Promise<OrderInfo|null> {
    const orders = this.retrieveOrdersFromLs()
    const index = orders.findIndex(o => o.orderId == _order.id)
    if (index < 0)
      return null

    const order = orders[index]
    //TODO: add order modify validations to prevent performing some actions on already activated order

    order.action = _order.action ?? order.action
    order.entryPoint = _order.entrypoint ?? order.entryPoint
    order.exitPoint = _order.exitpoint ?? order.exitPoint
    order.stopLoss = _order.stoploss ?? order.stopLoss
    order.takeProfit = _order.takeprofit ?? order.takeProfit
    order.lotSize = _order.lotsize ?? order.lotSize
    order.pips = _order.pips ?? order.pips
    order.pl = _order.pl ?? order.pl
    order.entryTime = ['buy', 'sell'].includes(order.action) ? new Date().getTime().toString() : order.entryTime
    order.exitTime = order.exitPoint && order.exitTime ? new Date().getTime().toString() : order.exitTime

    this.storeOrder(order, orders, index)
    return order
  }

  async unsetSlOrTP(order_id: string|number, slortp: 'sl'|'tp'): Promise<OrderInfo | null> {
    const orders = this.retrieveOrdersFromLs()
    const index = orders.findIndex(o => o.orderId == order_id)
    if (index < 0)
      return null

    const order = orders[index]
    if (slortp == 'sl')
      order.stopLoss = undefined
    else
      order.takeProfit = undefined

    this.storeOrder(order, orders, index)
    return order
  }

  launchOrderModal(type: OrderModalType, callback: OrderPlacedCallback, order?: OrderModifyInfo): void {
    return ;
  }

  private retrieveOrdersFromLs (): OrderInfo[] {
    return JSON.parse(localStorage.getItem(this.storage_name) ?? '[]') as OrderInfo[]
  }

  private retrieveOrderFromLs(id: number): OrderInfo|null
  {
    return this.retrieveOrdersFromLs().find(o => o.orderId == id) ?? null
  }

  private storeOrder(order: OrderInfo, orders?: OrderInfo[], index?: number)
  {
    if (!orders)
      orders = this.retrieveOrdersFromLs()

    if (index && index > orders.length)
      throw new Error('storeOrder: index cannot be greater than total order length')

    if (index)
      orders[index] = order
    else
      orders.push(order)

    localStorage.setItem(this.storage_name, JSON.stringify(orders))
  }
}