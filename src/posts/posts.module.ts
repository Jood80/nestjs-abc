import { Module } from '@nestjs/common';
import { PrismaService } from 'src/users/prisma.service';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.services';

@Module({
  imports: [],
  controllers: [PostsController],
  providers: [PostsService, PrismaService],
})
export class PostsModule {}
