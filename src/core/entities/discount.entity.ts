import { DiscountType } from '@core/types/discount.type';

export class Discount {
  readonly id: string;
  readonly code: string;
  readonly type: DiscountType;
  readonly value: number;
  readonly startDate: Date;
  readonly endDate?: Date;
  readonly isActive: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(params: {
    id: string;
    code: string;
    type: DiscountType;
    value: number;
    startDate: Date;
    endDate?: Date;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    this.id = params.id;
    this.code = params.code;
    this.type = params.type;
    this.value = params.value;
    this.startDate = params.startDate;
    this.endDate = params.endDate;
    this.isActive = params.isActive ?? true;
    this.createdAt = params.createdAt ?? new Date();
    this.updatedAt = params.updatedAt ?? new Date();
  }
}
