import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products/products.controller';

@Module({
  imports: [],
  controllers: [ProductsController],
})
export class PresentationModule {}
