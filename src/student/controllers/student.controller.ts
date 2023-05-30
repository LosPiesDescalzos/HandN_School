import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Render
} from "@nestjs/common";
import { StudentService } from "../services/student.service";
import { CreateStudentDto } from "../dto/create-student.dto";
import { UpdateStudentDto } from "../dto/update-student.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller('student')
@ApiTags('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}



  @ApiOperation({
    summary: 'Create student',
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
  @Post('create')
  async create(@Body() createStudentDto: CreateStudentDto) {
    return await this.studentService.createStudent(createStudentDto);
    // if (student == 3) {
    //   throw new BadRequestException('Email must be unique');
    // }
    // else if (student == 4) {
    //   throw new BadRequestException('Email must be <...>@gmail.com');
    // }
    // else if (student == 5) {
    //   throw new BadRequestException('Password must be more than 7 letters');
    // }
    // else if (student == 6) {
    //   throw new BadRequestException('Password must contains letters and numbers');
    // }
      // return student;
  }





  @ApiOperation({
    summary: 'Get all students',
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
    const students = await this.studentService.findAll();
    if (students == null) {
      throw new NotFoundException('Not found');
    }
    return students;
  }


  @ApiOperation({
    summary: 'Get student by id',
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
  @Get(':id/account')
  @Render('account')
  async findById(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number) {
    const student = await this.studentService.findById(id);
    if (student == null) {
      throw new NotFoundException('Not found');
    }
    if (student == 2){
      throw new NotFoundException('Id must be a number');
    }
    return {student, };
  }


  //
  // @ApiOperation({
  //   summary: 'Update student by id',
  // })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Ok',
  // })
  // @ApiResponse({
  //   status: 404,
  //   description: 'Not Found',
  // })
  // @ApiResponse({
  //   status: 405,
  //   description: 'Method Not Allowed',
  // })
  // @ApiResponse({
  //   status: 204,
  //   description: 'No Content',
  // })
  // @ApiResponse({
  //   status: 400,
  //   description: 'Bad Request',
  // })
  // @ApiResponse({
  //   status: 500,
  //   description: 'Internal Server Error',
  // })
  // @Patch(':id')
  // async update(
  //   @Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number,
  //   @Body() updateStudentDto: UpdateStudentDto,)
  // {
  //   const student = await this.studentService.findById(id);
  //   if (student == null) {
  //     throw new NotFoundException('Not found');
  //   }
  //  else if (student == 2) {
  //     throw new BadRequestException('Id must be a number');
  //   }
  //   const upStudent = await this.studentService.update(student.id, updateStudentDto);
  //   // @ts-ignore
  //   if (upStudent == 3) {
  //     throw new BadRequestException('Email must be unique');
  //   }
  //   // @ts-ignore
  //   else if (upStudent == 4) {
  //     throw new BadRequestException('Email must be <...>@gmail.com');
  //   }
  //   else if (upStudent == 5) {
  //     throw new BadRequestException('Password must be more than 7 letters');
  //   }
  //   else if (upStudent == 6) {
  //     throw new BadRequestException('Password must contains letters and numbers');
  //   }
  //     return upStudent;
  // }





  @ApiOperation({
    summary: 'Delete student by id',
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
    const student = await this.studentService.findById(id);
    if (student == null) {
      throw new NotFoundException('Not found');
    }
    if (student == 2){
      throw new BadRequestException('Id must be a number');
    }
    return this.studentService.deleteStudent(id);
  }
}
