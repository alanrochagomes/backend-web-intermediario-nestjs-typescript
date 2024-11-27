import { Injectable } from '@nestjs/common';
import { StartConversationDto } from './dto/start-conversation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ConversationService {
  private readonly history = [];

  constructor(private readonly prisma: PrismaService) {}

  startConversation(dto: StartConversationDto) {
    // TODO: Integrate Database
    return this.prisma.conversation.create({
      data: {
        input: dto.input,
        status: 'PROCESSING',
      },
    });

    // TODO: Integrate LLM API
  }
}
