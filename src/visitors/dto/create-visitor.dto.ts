import { ApiProperty } from '@nestjs/swagger';

export class CreateVisitorDto {
  @ApiProperty({
    example: 'Александр',
  })
  name: string;

  @ApiProperty({
    example: 'Пушкин',
  })
  surname: string;

  @ApiProperty({
    example: 'Сергеевич',
  })
  middlename: string;
}
