import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { CreateItemDto } from './dto/create-items.dto';
import { Request, Response } from 'express';
@Controller('items')
export class ItemsController {
  @Get()
  findAll(@Req() req: Request, @Res() res: Response): Response {
    console.log(req.url);
    return res.send('Hello from Express');
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto) {
    return ` Name:${createItemDto.name}\n Quantity: ${createItemDto.quantity}\n Description: ${createItemDto.desc}`;
  }
}
