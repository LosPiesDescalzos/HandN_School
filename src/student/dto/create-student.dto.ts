import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateStudentDto {

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
    example: 'nick',
    description: 'nick',
  })
  @IsNotEmpty()
  readonly nick: string;

  @ApiProperty({
    required: true,
    example: 'name@mail.ru',
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
}

