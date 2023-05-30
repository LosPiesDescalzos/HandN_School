import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateTeacherDto } from "../dto/create-teacher.dto";
import { UpdateTeacherDto } from "../dto/update-teacher.dto";

@Injectable()
export class TeacherService {

  constructor(private prisma: PrismaService) {}

  async create(createTeacherDto: CreateTeacherDto) {
    const email = createTeacherDto.email;
    const emailFind = await this.prisma.teacher.findUnique({
      where: { email }
    });
    const password = createTeacherDto.password;
    if (emailFind != null) {
      return 3;
    }
    if (!email.includes('@gmail.com')){
      return 4;
    }
    if (password.length <= 7) {
      return 5;
    }
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const valid = hasLetter && hasNumber
    if (valid == false) {
      return 6;
    }
    // @ts-ignore
    return await this.prisma.teacher.create({ data: createTeacherDto });
  }

  async findAll() {
    const teachers = this.prisma.teacher.findMany({
      select: {
        name: true,
        last_name: true,
        email: true,
      },
    });
    if (!teachers) {
      return null;
    }
    return teachers;
  }

  async findById(id: number) {
    const teacher = await this.prisma.teacher.findUnique({
      where: { id },
      select: {
        name: true,
        last_name: true,
        email: true,
      },
    });
    if (!teacher) {
      return null;
    }
    if (typeof id !== "number") {
      return 2;
    }
    return teacher;
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    const email = updateTeacherDto.email;
    const emailFind = await this.prisma.student.findUnique({
      where: { email }
    });
    const password = updateTeacherDto.password;
    if (emailFind != null) {
      return 3;
    }
    if (!email.includes('@gmail.ru')){
      return 4;
    }
    if (password.length <= 7) {
      return 5;
    }
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const valid = hasLetter && hasNumber
    if (valid == false) {
      return 6;
    }
    return this.prisma.teacher.update({
      // @ts-ignore
      where: { id: id },
      data: updateTeacherDto,
    });
  }

  async deleteTeacher(id: number) {
    if (typeof id !== "number") {
      return 2;
    }
    // @ts-ignore
    const teacher = await this.prisma.teacher.findUnique({ where: { id } });
    if (!teacher) {
      return null;
    }
    // @ts-ignore
    return this.prisma.teacher.delete({ where: { id } });
  }
}
