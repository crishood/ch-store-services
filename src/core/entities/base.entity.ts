/**
 * Base entity class that provides common properties for all entities
 */
export abstract class BaseEntity {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly isActive: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(params: {
    id: string;
    name: string;
    description: string;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    this.id = params.id;
    this.name = params.name;
    this.description = params.description;
    this.isActive = params.isActive ?? true;
    this.createdAt = params.createdAt ?? new Date();
    this.updatedAt = params.updatedAt ?? new Date();
  }
}
