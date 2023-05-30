import { ApiProperty } from "@nestjs/swagger";

export class CreateCourseDto {

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
