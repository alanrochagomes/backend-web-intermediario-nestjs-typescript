import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsOptional, IsString } from 'class-validator';
export class UpsertConversationDto {
  @IsMongoId()
  @IsOptional()
  @ApiProperty({
    description: 'Conversation ID',
    example: '67479c942601d2438be53840',
  })
  id?: string;
  @IsString()
  @ApiProperty({
    description: 'Input string to start a conversation with AI',
    example: 'What is microservices?',
  })
  input: string;
}
