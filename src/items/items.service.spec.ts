import { Test, TestingModule } from '@nestjs/testing';
import { Item } from './interfaces/items.interface';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

describe('ItemsService', () => {
  let itemsService: ItemsService;
  let itemsController: ItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
      providers: [
        {
          provide: ItemsService,
          useValue: {
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    itemsController = await module.resolve(ItemsController);
    itemsService = await module.resolve(ItemsService);
  });

  describe('findAll', () => {
    it('should return an array of useless items', async () => {
      const result: Item[] = [{ name: 'hat', quantity: 2, desc: 'bla bal' }];
      jest
        .spyOn(itemsService, 'findAll')
        .mockImplementation(async () => result);

      expect(await itemsController.findAll()).toBe(result);
    });
  });

  it('should be defined', () => {
    expect(itemsService).toBeDefined();
  });
});
