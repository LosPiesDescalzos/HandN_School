import { Injectable } from '@nestjs/common';
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { AppGateway } from 'src/web-soket/app.gateway';

@Injectable()
export class ProductsService {

  constructor(private prisma: PrismaService, private readonly gateway: AppGateway){}

  async create(createProductDto: CreateProductDto) {
    // @ts-ignore
    const product = await this.prisma.product.create({ data: createProductDto });

    //include: {teacher: true}

    this.gateway.server.emit('newProduct', product);
    return product;
  }

  async findAll() {
    return `This action returns all products`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
