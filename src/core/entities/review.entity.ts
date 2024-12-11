export class Review {
  readonly id: string;
  readonly userId: string;
  readonly productId: string;
  readonly rating: number;
  readonly comment: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(params: {
    id: string;
    userId: string;
    productId: string;
    rating: number;
    comment: string;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    this.id = params.id;
    this.userId = params.userId;
    this.productId = params.productId;
    this.rating = params.rating;
    this.comment = params.comment;
    this.createdAt = params.createdAt ?? new Date();
    this.updatedAt = params.updatedAt ?? new Date();
  }
}
