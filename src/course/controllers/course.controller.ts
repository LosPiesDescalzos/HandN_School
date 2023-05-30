import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  NotFoundException, Render, ParseIntPipe, HttpStatus
} from "@nestjs/common";
import { CourseService } from '../services/course.service';
import { CreateCourseDto } from '../dto/create-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";


@Controller('course')
@ApiTags('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}


  @ApiOperation({
    summary: 'Create course',
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
  async create(@Body() createCourseDto: CreateCourseDto) {
    const course =   await this.courseService.createCourse(createCourseDto);
    // if (course == null) {
    //   throw new BadRequestException('Subject must be not empty');
    // }
    // if (course == 2){
    //   throw new NotFoundException('Price must be a number');
    // }
    // if (course == 7){
    //   throw new NotFoundException('Price must be more or equals 0');
    // }
    return course;
  }





  @ApiOperation({
    summary: 'Get all courses',
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
    const courses = await this.courseService.findAll();
    if (courses == null) {
      throw new NotFoundException('Not found');
    }
    return courses;
  }



  @ApiOperation({
    summary: 'Get course by id',
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
    const course = await this.courseService.findById(id);
    if (course == null) {
      throw new NotFoundException('Not found');
    }
    if (course == 2){
      throw new NotFoundException('Id must be a number');
    }
    return course
  }


  @ApiOperation({
    summary: 'Update course by id',
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
    @Body() updateCourseDto: UpdateCourseDto,)
  {
    const course = await this.courseService.findById(id);
    if (course == null) {
      throw new NotFoundException('Not found');
    }
    const upCourse = await this.courseService.updateCourse(id, updateCourseDto);
    if (upCourse == 2){
      throw new NotFoundException('Price must be a number');
    }
    if (upCourse == 7){
      throw new NotFoundException('Price must be more or equals 0');
    }
    return upCourse;
  }





  @ApiOperation({
    summary: 'Delete course by id',
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
    const course = await this.courseService.findById(id);
    if (course == null) {
      throw new NotFoundException('Not found');
    }
    return this.courseService.deleteCourse(id);
  }
}
