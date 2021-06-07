import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.services';
import { Post as PostModel } from '@prisma/client';
import { CreatePostDto } from './dto/post.dto';
import { ApiBody, ApiCreatedResponse } from '@nestjs/swagger';

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('post/:id')
  async getPostById(@Param('id') id: string): Promise<PostModel> {
    return this.postsService.post({ id: Number(id) });
  }

  @Get('posts')
  async getAllPosts() {
    return this.postsService.postsList();
  }

  @Get('filtered-posts/:searchString')
  async getFilteredPosts(
    @Param('searchString') searchString: string,
  ): Promise<PostModel[]> {
    return this.postsService.posts({
      where: {
        OR: [
          {
            title: { contains: searchString },
          },
          {
            content: { contains: searchString },
          },
        ],
      },
    });
  }

  @Post('post')
  @ApiCreatedResponse({ description: 'Post Drafting' })
  @ApiBody({ type: CreatePostDto })
  async createDraft(@Body() postData: CreatePostDto): Promise<PostModel> {
    const { title, content, authorEmail } = postData;
    return this.postsService.createPost({
      title,
      content,
      author: {
        connect: { email: authorEmail },
      },
    });
  }

  @Put('post/:id')
  async publishPost(@Param('id') id: string): Promise<PostModel> {
    return this.postsService.updatePost({
      where: { id: Number(id) },
      data: { published: true },
    });
  }

  @Delete('post/:id')
  async deletePost(@Param('id') id: string): Promise<PostModel> {
    return this.postsService.deletePost({ id: Number(id) });
  }
}
