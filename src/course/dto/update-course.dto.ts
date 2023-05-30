import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateCourseDto } from './create-course.dto';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {

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
