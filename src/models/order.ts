import { OrderDetail } from "./order-detail";

export class Order {
    constructor(
        public id: string,
        public date: string,
        public statusCode: OrderState,
        public statusName: string,
        public packageType: string,
        public user: string,
        public homeDelivery: boolean,
        public total: number,
        public detail: Array<OrderDetail> = []
    ){}
}

export enum OrderState {
    EnEspera = "EnEspera",
    EnPreparacion = "EnPreparacion",
    Listo = "Listo",
    Despachado = "Despachado"
}