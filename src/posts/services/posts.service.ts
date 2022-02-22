import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/services/prisma.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';

@Injectable()
export class PostsService {

constructor(private readonly prisma:PrismaService){}

create(data: CreatePostDto) {
  return this.prisma.post.create({ data });
}

  findAll() {
    return this.prisma.post.findMany;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
