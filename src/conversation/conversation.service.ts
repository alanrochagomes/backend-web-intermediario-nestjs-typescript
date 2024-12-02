import { Injectable, NotFoundException } from '@nestjs/common';
import { StartConversationDto } from './dto/start-conversation.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { HfInference } from '@huggingface/inference';

@Injectable()
export class ConversationService {
  private readonly history = [];

  private readonly client = new HfInference(process.env.HUGGING_FACE_API_TOKEN);

  constructor(private readonly prisma: PrismaService) {}

  async startConversation(dto: StartConversationDto) {
    // Create conversation (pending)
    const conversation = await this.prisma.conversation.create({
      data: {
        input: dto.input,
        status: 'PROCESSING',
      },
    });

    // Call LLM API
    const chatCompletion = await this.client.chatCompletion({
      model: 'meta-llama/Llama-3.2-3B-Instruct',
      messages: [
        {
          role: 'user',
          content: dto.input,
        },
      ],
      max_tokens: 500,
    });

    const response = chatCompletion.choices[0].message;

    // Update conversation with response and respondedAt
    const conversationUpdated = await this.prisma.conversation.update({
      where: { id: conversation.id },
      data: {
        response: response.content,
        respondedAt: new Date(),
        status: 'COMPLETED',
      },
    });

    return conversationUpdated;
  }

  readAll() {
    return this.prisma.conversation.findMany();
  }

  async readById(id: string) {
    const foundConversation = await this.prisma.conversation.findUnique({
      where: { id },
    });

    console.log(foundConversation);

    if (!foundConversation) {
      throw new NotFoundException('Conversation not found');
    }

    return foundConversation;
  }
}
