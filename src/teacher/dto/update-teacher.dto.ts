import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateTeacherDto } from './create-teacher.dto';
import { IsNotEmpty } from "class-validator";

export class UpdateTeacherDto extends PartialType(CreateTeacherDto) {

  @ApiProperty({
    required: true,
    example: 'name',
    description: 'name',
  })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    required: true,
    example: 'last_name',
    description: 'last_name',
  })
  @IsNotEmpty()
  readonly last_name: string;

  @ApiProperty({
    required: true,
    example: 'username@mail.ru',
    description: 'email',
  })
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    required: true,
    example: 'password',
    description: 'password',
  })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({
    required: true,
    example: 'contract',
    description: 'contract',
  })
  @IsNotEmpty()
  readonly contract: string;
}
