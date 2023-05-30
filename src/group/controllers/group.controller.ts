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
import { GroupService } from '../services/group.service';
import { CreateGroupDto } from '../dto/create-group.dto';
import { UpdateGroupDto } from '../dto/update-group.dto';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateStudentDto } from "../../student/dto/create-student.dto";
import { UpdateStudentDto } from "../../student/dto/update-student.dto";

@Controller('group')
@ApiTags('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}




  @ApiOperation({
    summary: 'Create group',
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
  async create(@Body() createGroupDto: CreateGroupDto) {
    const group = await this.groupService.createGroup(createGroupDto);
    if (group == null) {
      throw new BadRequestException('Name must be unique');
    }
    return group;
  }





  @ApiOperation({
    summary: 'Get all groups',
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
    const groups = await this.groupService.findAll();
    if (groups == null) {
      throw new NotFoundException('Not found');
    }

    return groups;
  }



  @ApiOperation({
    summary: 'Get group by id',
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
    const group = await this.groupService.findById(id);

    if (group == null) {
      throw new NotFoundException('Not found');
    }

    return group;
  }



  @ApiOperation({
    summary: 'Update group by id',
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
    @Body() updateGroupDto: UpdateGroupDto,)
  {
    const group = await this.groupService.findById(id);
    if (group == null) {
      throw new NotFoundException('Not found');
    }

    return await this.groupService.updateGroup(id, updateGroupDto);

  }





  @ApiOperation({
    summary: 'Delete group by id',
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
    const group = await this.groupService.findById(id);
    if (group == null) {
      throw new NotFoundException('Not found');
    }

    return this.groupService.deleteGroup(id);
  }
}
