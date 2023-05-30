import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateReviewDto } from './create-review.dto';

export class UpdateReviewDto extends PartialType(CreateReviewDto) {
  @ApiProperty({
    required: true,
    example: 'description',
    description: 'description',
  })
  description: string;
}
