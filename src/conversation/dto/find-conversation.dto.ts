import { IsMongoId } from 'class-validator';
export class FindConversationDto {
  @IsMongoId()
  id: string;
}
