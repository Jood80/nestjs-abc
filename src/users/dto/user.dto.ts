import { Prisma } from '.prisma/client';

export class UserParamsDto {
  skip: number;
  take: number;
  cursor: Prisma.UserWhereUniqueInput;
  where: Prisma.UserWhereUniqueInput;
  orderBy: Prisma.UserOrderByInput;
  data: Prisma.UserUpdateInput;
}

export class CreateUserDTO {
  readonly name?: string;
  readonly email: string;
}
