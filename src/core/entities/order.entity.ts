import { OrderStatus } from '@core/types/order.type';

export class Order {
  readonly id: string;
  readonly userId: string;
  readonly status: OrderStatus;
  readonly total: number;
  readonly items: OrderItem[];
  readonly paymentMethod: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(params: {
    id: string;
    userId: string;
    status?: OrderStatus;
    total: number;
    items: OrderItem[];
    paymentMethod: string;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    this.id = params.id;
    this.userId = params.userId;
    this.status = params.status ?? OrderStatus.PENDING;
    this.total = params.total;
    this.items = params.items;
    this.paymentMethod = params.paymentMethod;
    this.createdAt = params.createdAt ?? new Date();
    this.updatedAt = params.updatedAt ?? new Date();
  }
}

export class OrderItem {
  readonly productId: string;
  readonly quantity: number;
  readonly price: number;
  readonly total: number;

  constructor(params: {
    productId: string;
    quantity: number;
    price: number;
    total: number;
  }) {
    this.productId = params.productId;
    this.quantity = params.quantity;
    this.price = params.price;
    this.total = params.total;
  }
}
