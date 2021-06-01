import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [PrismaService],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
