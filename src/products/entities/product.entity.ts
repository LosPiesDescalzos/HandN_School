import { ApiProperty } from "@nestjs/swagger";

export class Product {

  @ApiProperty({
    required: true,
    example: 'name',
    description: 'name',
  })
  name: string;

  @ApiProperty({
    required: true,
    example: 1000,
    description: 'price',
  })
  price: string;

  @ApiProperty({
    required: true,
    example: 'description',
    description: 'description',
  })
  description: string;

  @ApiProperty({
    required: true,
    example: 'count',
    description: 'count',
  })
  count: number;

}
