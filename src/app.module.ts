import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { itemsModule } from './items/items.module';
import { ItemsService } from './items/items.service';
import config from './config/keys';

@Module({
  imports: [itemsModule, MongooseModule.forRoot(config.mongoURL)],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
