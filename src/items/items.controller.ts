import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateItemDto } from './dto/create-items.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get All items';
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto) {
    return ` Name:${createItemDto.name}\n Quantity: ${createItemDto.quantity}\n Description: ${createItemDto.desc}`;
  }
}
