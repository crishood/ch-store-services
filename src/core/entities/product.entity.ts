import { BaseEntity } from './base.entity';
import { ProductCategory } from '@core/types/product.type';

export class Product extends BaseEntity {
  readonly price: number;
  readonly category: ProductCategory;
  readonly categoryId: string;
  readonly downloadUrl: string;
  readonly artworkUrl?: string;
  readonly previewUrl?: string;
  readonly isFeatured: boolean;
  readonly authorName: string;

  constructor(params: {
    id: string;
    name: string;
    description: string;
    price: number;
    category: ProductCategory;
    categoryId: string;
    downloadUrl: string;
    artworkUrl?: string;
    previewUrl?: string;
    isActive?: boolean;
    isFeatured?: boolean;
    authorName: string;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    super(params);
    this.price = params.price;
    this.category = params.category;
    this.categoryId = params.categoryId;
    this.downloadUrl = params.downloadUrl;
    this.artworkUrl = params.artworkUrl;
    this.previewUrl = params.previewUrl;
    this.isFeatured = params.isFeatured ?? false;
    this.authorName = params.authorName;
  }
}
