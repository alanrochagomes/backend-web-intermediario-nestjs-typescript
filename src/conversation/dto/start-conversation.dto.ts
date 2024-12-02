import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class StartConversationDto {
  @IsString()
  @ApiProperty({
    description: 'Input string to start a conversation with AI',

    example: 'What is microservices?',
  })
  input: string;
}
