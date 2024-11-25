import { Controller, Post } from '@nestjs/common';
@Controller('conversation')
export class ConversationController {
  @Post()
  startConversation() {
    return 'Start Conversation';
  }
}
