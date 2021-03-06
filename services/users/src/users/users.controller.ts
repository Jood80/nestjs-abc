import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User as UserModel } from '@prisma/client';
import { CreateUserDTO } from './dto/user.dto';
import { ApiBody, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';

@Controller()
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('user/:id')
  async getUserById(@Param('id') id: string): Promise<UserModel> {
    return this.userService.user({ id: Number(id) });
  }

  @Post('user')
  @ApiResponse({
    status: 201,
  })
  @ApiCreatedResponse({ description: 'User Registration' })
  @ApiBody({ type: CreateUserDTO })
  async signupUser(@Body() userData: CreateUserDTO): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Delete('user/:id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return this.userService.deleteUser({ id: Number(id) });
  }
}
