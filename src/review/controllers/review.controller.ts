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
import { ReviewService } from '../services/review.service';
import { CreateReviewDto } from '../dto/create-review.dto';
import { UpdateReviewDto } from '../dto/update-review.dto';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateStudentDto } from "../../student/dto/create-student.dto";
import { UpdateStudentDto } from "../../student/dto/update-student.dto";

@Controller('review')
@ApiTags('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}


  @ApiOperation({
    summary: 'Create review',
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
  async create(@Body() createReviewDto: CreateReviewDto) {
    const review = await this.reviewService.createReview(createReviewDto);
    if (review == null) {
      throw new BadRequestException('Description must be not empty');
    }
    return review;
  }


  @ApiOperation({
    summary: 'Get all reviews',
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
    const reviews = await this.reviewService.findAll();
    if (reviews == null) {
      throw new NotFoundException('Not found');
    }

    return reviews;
  }



  @ApiOperation({
    summary: 'Get review by id',
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
    const review = await this.reviewService.findById(id);

    if (review == null) {
      throw new NotFoundException('Not found');
    }

    return review
  }



  @ApiOperation({
    summary: 'Update review by id',
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
    @Body() updateReviewDto: UpdateReviewDto,)
  {
    const review = await this.reviewService.findById(id);
    if (review == null) {
      throw new NotFoundException('Not found');
    }

    return await this.reviewService.updateReview(id, updateReviewDto);

  }




  @ApiOperation({
    summary: 'Delete review by id',
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
    const review = await this.reviewService.findById(id);
    if (review == null) {
      throw new NotFoundException('Not found');
    }

    return this.reviewService.deleteReview(id);
  }
}

