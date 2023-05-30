import { ApiProperty } from "@nestjs/swagger";

export class Course {

  @ApiProperty({
    required: true,
    example: 1,
    description: 'id',
  })
  id: number;

  @ApiProperty({
    required: true,
    example: 'Math',
    description: 'subject',
  })
  subject: string;


  @ApiProperty({
    required: true,
    example: 10000,
    description: 'price',
  })
  price: number;

}
