import { BaseEntity } from './base.entity';

export class Category extends BaseEntity {
  readonly slug: string;
  readonly parentId?: string;

  constructor(params: {
    id: string;
    name: string;
    description: string;
    slug: string;
    parentId?: string;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    super(params);
    this.slug = params.slug;
    this.parentId = params.parentId;
  }
}
