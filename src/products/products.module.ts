import { Module } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { ProductsController } from './controllers/products.controller';
// import { PrismaService } from '../prisma/prisma.service';
import { AppGateway } from "../web-soket/app.gateway";

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, AppGateway]
})
export class ProductsModule {}
