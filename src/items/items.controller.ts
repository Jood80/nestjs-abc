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
import { Item } from './interfaces/items.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.itemsService.findOne(id);
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
