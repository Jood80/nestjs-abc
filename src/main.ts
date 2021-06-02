import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('NestJs ABC API')
    .setDescription('Nothing Fancy')
    .setVersion('4.8.0')
    .build();

  const apiDocument = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, apiDocument);

  await app.listen(port);
  Logger.log(`Server's running on http://loalhost:${port}`, 'Bootstrap');
}
bootstrap();
