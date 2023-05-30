import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateGroupDto } from './create-group.dto';

export class UpdateGroupDto extends PartialType(CreateGroupDto) {


  @ApiProperty({
    required: true,
    example: 'name',
    description: 'name',
  })
  name: string;
}
