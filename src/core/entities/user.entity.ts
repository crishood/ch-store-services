import { UserRole } from '@core/types/user.type';

export class User {
  readonly id: string;
  readonly email: string;
  readonly password: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly role: UserRole;
  readonly isVerified: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(params: {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role?: UserRole;
    isVerified?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    this.id = params.id;
    this.email = params.email;
    this.password = params.password;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.role = params.role ?? UserRole.CUSTOMER;
    this.isVerified = params.isVerified ?? false;
    this.createdAt = params.createdAt ?? new Date();
    this.updatedAt = params.updatedAt ?? new Date();
  }
}
