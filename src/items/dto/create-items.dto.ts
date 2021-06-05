import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
  @ApiProperty({
    description: 'The name of that poor item that you will damage',
    minimum: 1,
    default: 'Hat',
  })
  readonly name: string;

  @ApiProperty({
    description: 'The quantity of that usless product that you want to buy',
    default: 2,
  })
  readonly quantity: number;

  @ApiProperty({
    description: 'Not really sure how to describe that ',
    default: 'Lorem text will cry about that',
  })
  readonly desc: string;
}
