import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-items.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get All items';
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return `This is item No.${id}`;
  }

  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  async create(@Body() createItemDto: CreateItemDto) {
    return `Name:${createItemDto.name}
    Quantity: ${createItemDto.quantity}
    Description: ${createItemDto.desc}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete item No.${id}`;
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `Update item No.${id}:
    Name:${updateItemDto.name}
    Quantity: ${updateItemDto.quantity}
    Description: ${updateItemDto.desc}`;
  }
}
