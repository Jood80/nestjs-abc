import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RMQ_URL],
        queue: 'items_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  app.listen(async () => {
    Logger.log(`Microservice is running`);
  });
}

bootstrap();
