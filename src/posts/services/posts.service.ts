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

  findOne(id: number) {
    return this.prisma.post.findUnique({where:{id}});
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({where:{id}});
  }

  remove(id: number) {
    return this.prisma.post.remove({where:{id}});
  }
}
