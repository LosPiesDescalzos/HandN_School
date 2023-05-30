import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from "class-validator";

export class Student {

  @ApiProperty({
    required: true,
    example: 'name@mail.ru',
    description: 'email',
  })
  email: string;

  @ApiProperty({
    required: true,
    example: 'nick',
    description: 'nick',
  })
  @IsNotEmpty()
  readonly nick: string;

  @ApiProperty({
    required: true,
    example: 'password',
    description: 'password',
  })
  password: string;


  @ApiProperty({
    required: true,
    example: 'name',
    description: 'name',
  })
  name: string;

  @ApiProperty({
    required: true,
    example: 'last_name',
    description: 'last_name',
  })
  last_name: string;
}

