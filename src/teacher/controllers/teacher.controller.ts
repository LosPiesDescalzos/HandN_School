import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpStatus,
  NotFoundException, Render, BadRequestException
} from "@nestjs/common";
import { TeacherService } from '../services/teacher.service';
import { CreateTeacherDto } from '../dto/create-teacher.dto';
import { UpdateTeacherDto } from '../dto/update-teacher.dto';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UpdateStudentDto } from "../../student/dto/update-student.dto";

@Controller('teacher')
@ApiTags('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}


  @ApiOperation({
    summary: 'Create teacher',
  })
  @ApiResponse({
    status: 201,
    description: 'Created',
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
  })
  @Post()
  async create(@Body() createTeacherDto: CreateTeacherDto) {
    const teacher = await this.teacherService.create(createTeacherDto);
    if (teacher == 3) {
      throw new BadRequestException('Email must be unique');
    }
    else if (teacher == 4) {
      throw new BadRequestException('Email must be <...>@gmail.com');
    }
    else if (teacher == 5) {
      throw new BadRequestException('Password must be more than 7 letters');
    }
    else if (teacher == 6) {
      throw new BadRequestException('Email must contains letters and numbers');
    }
    else {
      return teacher;
    }
  }





  @ApiOperation({
    summary: 'Get all teachers',
  })
  @ApiResponse({
    status: 200,
    description: 'Ok',
  })
  @ApiResponse({
    status: 404,
    description: 'Not found',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
  })
  @Get()
  async findAll() {
    const teachers = await this.teacherService.findAll();
    if (teachers == null) {
      throw new NotFoundException('Not found');
    }

    return teachers;
  }




  @ApiOperation({
    summary: 'Get teacher by id',
  })
  @ApiResponse({
    status: 200,
    description: 'Ok',
  })
  @ApiResponse({
    status: 404,
    description: 'Not found',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
  })
  @Get(':id')
  @Render('')
  async findById(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number) {
    const teacher = await this.teacherService.findById(id);
    if (teacher == null) {
      throw new NotFoundException('Not found');
    }
    if (teacher == 2){
      throw new NotFoundException('Id must be a number');
    }
    return teacher;
  }





  @ApiOperation({
    summary: 'Update teacher by id',
  })
  @ApiResponse({
    status: 200,
    description: 'Ok',
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
  })
  @ApiResponse({
    status: 405,
    description: 'Method Not Allowed',
  })
  @ApiResponse({
    status: 204,
    description: 'No Content',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
  })
  @Patch(':id')
  async update(
    @Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number,
    @Body() updateTeacherDto: UpdateTeacherDto)
  {
    const teacher = await this.teacherService.findById(id);
    if (teacher == null) {
      throw new NotFoundException('Not found');
    }
    if (teacher == 2) {
      throw new BadRequestException('Id must be a number');
    }
    const upTeacher = await this.teacherService.update(id, updateTeacherDto);
    // @ts-ignore
    if (upTeacher == 3) {
      throw new BadRequestException('Email must be unique');
    }
    // @ts-ignore
    if (upTeacher == 4) {
      throw new BadRequestException('Email must be <...>@gmail.com');
    }
    if (upTeacher == 5) {
      throw new BadRequestException('Password must be more than 7 letters');
    }
    if (upTeacher == 6) {
      throw new BadRequestException('Email must contains letters and numbers');
    }
    return upTeacher;
  }







  @ApiOperation({
    summary: 'Delete teacher by id',
  })
  @ApiResponse({
    status: 200,
    description: 'Ok',
  })
  @ApiResponse({
    status: 204,
    description: 'No Content',
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
  })
  @Delete(':id')
  async remove(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number) {
    const teacher = await this.teacherService.findById(id);
    if (teacher == null) {
      throw new NotFoundException('Not found');
    }
    if (teacher == 2){
      throw new BadRequestException('Id must be a number');
    }
    return this.teacherService.deleteTeacher(id);
  }
}
