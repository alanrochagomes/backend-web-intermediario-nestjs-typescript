import { Injectable } from '@nestjs/common';
import { StartConversationDto } from './dto/start-conversation.dto';

@Injectable()
export class ConversationService {
  private readonly history = [];

  startConversation(dto: StartConversationDto) {
    // TODO: Integrate Database
    // TODO: Integrate LLM API

    this.history.push(dto);

    return {
      input: dto.input,
      status: 'processing',
      historyLength: this.history.length,
    };
  }
}
