import { ApiProperty } from "@nestjs/swagger";

export class Review {

  @ApiProperty({
    required: true,
    example: 1,
    description: 'id',
  })
  id: number;


  @ApiProperty({
    required: true,
    example: 'description',
    description: 'description',
  })
  description: string;
}
