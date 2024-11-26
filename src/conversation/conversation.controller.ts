import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { StartConversationDto } from './dto/start-conversation.dto';

@Controller('conversation')
export class ConversationController {
  @HttpCode(HttpStatus.OK)
  @Post()
  startConversation(@Body() dto: StartConversationDto) {
    return dto;
  }
}
