import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateStudentDto } from "../dto/create-student.dto";
import { UpdateStudentDto } from "../dto/update-student.dto";

@Injectable()
export class StudentService {

  constructor(private prisma: PrismaService) {}

  async createStudent(createStudentDto: CreateStudentDto) {
    // const email  = createStudentDto.email;
    // const emailFind = await this.prisma.student.findUnique({
    //   where: { email }
    // });
    // const password = createStudentDto.password;
    // if (emailFind != null) {
    //   return 3;
    // }
    // if (!email.includes('@gmail.com')){
    //   return 4;
    // }
    // if (password.length <= 7) {
    //   return 5;
    // }
    // const hasLetter = /[a-zA-Z]/.test(password);
    // const hasNumber = /\d/.test(password);
    // const valid = hasLetter && hasNumber
    // if (valid == false) {
    //   return 6;
    // }

    return await this.prisma.student.create({ data: createStudentDto });
  }

  async findAll() {
    const students = this.prisma.student.findMany({
      select: {
        name: true,
        last_name: true,
        email: true,
        // @ts-ignore
        nick: true,
      },
    });
    if (!students) {
      return null;
    }
    return students;
  }


  async findById(id: number) {
    const student = await this.prisma.student.findUnique({ where: { id },
      select: {
        name: true,
        last_name: true,
        email: true,
        // @ts-ignore
        nick: true,
      },
    });
    if (!student) {
      return null;
    }
    if (typeof id !== "number") {
      return 2;
    }
    return student;
  }

  async findByEmail(email: string) {
    const student = await this.prisma.student.findUnique({ where: { email },
      select: {
        name: true,
        last_name: true,
        email: true,
        // @ts-ignore
        nick: true,
      },
    });
    if (!student) {
      return null;
    }
    return student;
  }

  //
  //
  // async update(id: number, updateStudentDto: UpdateStudentDto) {
  //   const email  = updateStudentDto.email;
  //   const emailFind = await this.prisma.student.findUnique({
  //     where: { email }
  //   });
  //   const password = updateStudentDto.password;
  //   if (emailFind != null) {
  //     return 3;
  //   }
  //   if (!email.includes('@gmail.com')){
  //     return 4;
  //   }
  //
  //   if (password.length <= 7) {
  //     return 5;
  //   }
  //   const hasLetter = /[a-zA-Z]/.test(password);
  //   const hasNumber = /\d/.test(password);
  //   const valid = hasLetter && hasNumber
  //   if (valid == false) {
  //     return 6;
  //   }
  //   return this.prisma.student.update({
  //     // @ts-ignore
  //     where: { id: id },
  //     data: updateStudentDto,
  //   });
  // }


  async deleteStudent(id: number) {
    if (typeof id !== "number") {
      return 2;
    }
    // @ts-ignore
    const student = await this.prisma.student.findUnique({ where: { id } });
    if (!student) {
      return null;
    }
    // @ts-ignore
    return this.prisma.student.delete({ where: { id } });
  }
}



