import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { StartConversationDto } from './dto/start-conversation.dto';
import { ConversationService } from './conversation.service';

@Controller('conversation')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  startConversation(@Body() dto: StartConversationDto) {
    return this.conversationService.startConversation(dto);
  }
}
