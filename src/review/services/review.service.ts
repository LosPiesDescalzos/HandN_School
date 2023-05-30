import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from '../dto/create-review.dto';
import { UpdateReviewDto } from '../dto/update-review.dto';
import { PrismaService } from "../../prisma/prisma.service";

@Injectable()
export class ReviewService {

  constructor(private prisma: PrismaService) {}

  async createReview(createReviewDto: CreateReviewDto) {
    const description = createReviewDto.description;

    if (description != null) {
      return null;
    }
    // @ts-ignore
    return await this.prisma.review.create({ data: createReviewDto });
  }

  async findAll() {
    const reviews = this.prisma.review.findMany();

    if (!reviews) {
      return null;
    }

    return reviews;
  }

  async findById(id: number) {
    const review = await this.prisma.review.findUnique({ where: { id }});

    if (!review ) {
      return null;
    }

    return review ;
  }

  async updateReview(id: number, updateReviewDto: UpdateReviewDto) {
    return this.prisma.review.update({
      // @ts-ignore
      where: { id: id },
      data: updateReviewDto,
    });
  }

  async deleteReview(id: number) {
    const review = await this.prisma.review.findUnique({ where: { id } });

    if (!review) {
      return null;
    }
    // @ts-ignore
    return this.prisma.review.delete({ where: { id } });
  }
}
