import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';

export class FindConversationDto {
  @IsMongoId()
  @ApiProperty({
    description:
      'Unique identifier of the conversation, represented as a MongoDB ObjectID ',
    example: '63f1e4f8c1f4b4a1c8e4a89d',
  })
  id: string;
}
