import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

describe('ItemsService', () => {
  let service: INestApplication;
  // let service: ItemsService;
  let controller: ItemsController;

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

    controller = module.get<ItemsController>(ItemsController);
    service = module.get<ItemsService>(ItemsService);
    // service = module.createNestApplication();
    // await service.init()
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // afterAll(async () => {
  //   await service.close();
  // });
});
