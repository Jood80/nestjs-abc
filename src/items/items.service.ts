import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/items.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: 1,
      name: 'Bucket',
      quantity: 3,
    },
    {
      id: 2,
      name: 'hat',
      quantity: 15,
      desc: 'Some fancy summer hats, lol as if people wear hats in other than summer',
    },
    {
      id: 3,
      name: 'Blanket',
      quantity: 3,
      desc: 'White one',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: number): Item {
    return this.items.find((item) => item.id === id);
  }
}
