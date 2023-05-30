import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateProductDto {

  @ApiProperty({
    required: true,
    example: 'name',
    description: 'name',
  })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    required: true,
    example: 1000,
    description: 'price',
  })
  @IsNotEmpty()
  readonly price: number;

  @ApiProperty({
    required: true,
    example: 'description',
    description: 'description',
  })
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty({
    required: true,
    example: 5,
    description: 'count',
  })
  @IsNotEmpty()
  readonly count: number;
}
