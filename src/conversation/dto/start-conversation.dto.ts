import { IsString } from 'class-validator';
export class StartConversationDto {
  @IsString()
  input: string;
}
