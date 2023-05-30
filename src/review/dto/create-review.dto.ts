import { ApiProperty } from "@nestjs/swagger";

export class CreateReviewDto {
  @ApiProperty({
    required: true,
    example: 'description',
    description: 'description',
  })
  description: string;
}
