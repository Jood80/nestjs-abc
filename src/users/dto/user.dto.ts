import { Prisma } from '.prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserParamsDto {
  skip: number;
  take: number;
  cursor: Prisma.UserWhereUniqueInput;
  where: Prisma.UserWhereUniqueInput;
  orderBy: Prisma.UserOrderByInput;
  data: Prisma.UserUpdateInput;
}

export class CreateUserDTO {
  @ApiProperty()
  readonly name?: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly password: string;
}
