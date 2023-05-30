import { ApiProperty } from "@nestjs/swagger";

export class Group {

  @ApiProperty({
    required: true,
    example: 1,
    description: 'id',
  })
  id: number;


  @ApiProperty({
    required: true,
    example: 'name',
    description: 'name',
  })
  name: string;
}
