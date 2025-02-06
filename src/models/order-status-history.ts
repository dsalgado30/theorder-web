import { OrderState } from "./order";

export class OrderStatusHistory {
    constructor(
      public status: OrderState,
      public statusName: string,
      public date: string,
      public time: string
    ) {}
  }