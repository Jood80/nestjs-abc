import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { itemsModule } from './items/items.module';
import { ItemsService } from './items/items.service';

@Module({
  imports: [itemsModule, MongooseModule.forRoot(process.env.MONGOURL)],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
