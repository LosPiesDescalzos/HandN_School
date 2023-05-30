import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from '../dto/create-group.dto';
import { UpdateGroupDto } from '../dto/update-group.dto';
import { PrismaService } from "../../prisma/prisma.service";
import { CreateStudentDto } from "../../student/dto/create-student.dto";
import { UpdateStudentDto } from "../../student/dto/update-student.dto";

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}

  async createGroup(createGroupDto: CreateGroupDto) {
    const name  = createGroupDto.name;
    const nameFind = await this.prisma.group.findUnique({
      // @ts-ignore
      where: { name }
    });

    if (name!= null) {
      return null;
    }
    // @ts-ignore
    return await this.prisma.group.create({ data: createGroupDto });
  }

  async findAll() {
    const groups = this.prisma.group.findMany({
      select: {
        name: true
      },
    });

    if (!groups) {
      return null;
    }

    return groups;
  }


  async findById(id: number) {
    const group = await this.prisma.group.findUnique({ where: { id },
      select: {
        name: true
      },
    });

    if (!group) {
      return null;
    }

    return group;
  }


  async updateGroup(id: number, updateGroupDto: UpdateGroupDto) {

    return this.prisma.group.update({
      // @ts-ignore
      where: { id: id },
      data: updateGroupDto,
    });
  }

  async deleteGroup(id: number) {
    // @ts-ignore
    const group = await this.prisma.group.findUnique({ where: { id } });

    if (!group) {
      return null;
    }
    // @ts-ignore
    return this.prisma.group.delete({ where: { id } });

  }
}



