import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from '../dto/create-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';
import { PrismaService } from "../../prisma/prisma.service";


@Injectable()
export class CourseService {

  constructor(private prisma: PrismaService) {}

  async createCourse(createCourseDto: CreateCourseDto) {
    // const subject  = createCourseDto.subject;
    // if (subject === null) {
    //   return null;
    // }
    // const price = createCourseDto.price;
    // if (price < 0){
    //   return 7;
    // }
    // if (typeof price !== "number") {
    //   return 2;
    // }
    // @ts-ignore
    return await this.prisma.course.create({ data: createCourseDto });
  }

  async findAll() {
    const courses = this.prisma.course.findMany();
    if (!courses) {
      return null;
    }
    return courses;
  }


  async findById(id: number) {
    const course = await this.prisma.student.findUnique({ where: { id }});
    if (!course) {
      return null;
    }
    if (typeof id !== "number") {
      return 2;
    }
    return course;
  }



  async updateCourse(id: number, updateCourseDto: UpdateCourseDto) {
    const price = updateCourseDto.price;
    if (price < 0){
      return 7;
    }
    if (typeof price !== "number") {
      return 2;
    }
    return this.prisma.course.update({
      // @ts-ignore
      where: { id: id },
      data: updateCourseDto,
    });
  }

  async deleteCourse(id: number) {
    // @ts-ignore
    const course = await this.prisma.course.findUnique({ where: { id } });
    if (!course) {
      return null;
    }
    // @ts-ignore
    return this.prisma.course.delete({ where: { id } });
  }
}
