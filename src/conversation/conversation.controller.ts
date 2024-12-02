import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { StartConversationDto } from './dto/start-conversation.dto';
import { ConversationService } from './conversation.service';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { FindConversationDto } from './dto/find-conversation.dto';

@Controller('conversation')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @ApiOkResponse({
    description: 'Conversation started successfully.',
    example:
      'Microservices is an architectural style that structures an application as a collection of small, independent services that communicate with each other using lightweight protocols and APIs. Each service is responsible for a specific business capability and can be developed, tested, and deployed independently.',
  })
  @ApiBadRequestResponse({
    description: 'Request body validation error.',
    example: {
      message: ['input must be a string'],
      error: 'Bad Request',
      statusCode: 400,
    },
  })
  @ApiOperation({
    summary: 'Start a conversation.',
  })
  @HttpCode(HttpStatus.OK)
  @Post()
  startConversation(@Body() dto: StartConversationDto) {
    return this.conversationService.startConversation(dto);
  }

  @ApiOkResponse({
    description: 'Successfully retrieved all conversations.',
    example: [
      {
        id: '67479c942601d2438be53840',
        input: 'Qual é o conceito de microservices?',
        response: null,
        respondedAt: null,
        status: 'PROCESSING',
      },
      {
        id: '674e306ce17973d42ee4117e',
        input: 'What is microservices? (short answer)',
        response:
          'Microservices is an architectural style that structures an application as a collection of small, independent services that communicate with each other using lightweight protocols and APIs. Each service is responsible for a specific business capability and can be developed, tested, and deployed independently.',
        respondedAt: '2024-12-02T22:10:53.877Z',
        status: 'COMPLETED',
      },
    ],
  })
  @ApiOperation({
    summary: 'Retrieve all conversations.',
  })
  @Get()
  readAll() {
    return this.conversationService.readAll();
  }

  @ApiOkResponse({
    description: 'Successfully retrieved the conversation by ID.',
    example: {
      id: '63f1e4f8c1f4b4a1c8e4a89d',
      title: 'Introduction to Microservices',
      content:
        'Microservices is an architectural style that structures an application as a collection of small, independent services...',
      createdAt: '2023-12-01T10:00:00Z',
      updatedAt: '2023-12-01T11:00:00Z',
    },
  })
  @ApiBadRequestResponse({
    description: 'Param object must be valid.',
    example: {
      message: ['id must be a mongodb id'],
      error: 'Bad Request',
      statusCode: 400,
    },
  })
  @ApiOperation({
    summary: 'Retrieve a conversation by ID.',
  })
  @Get(':id')
  readById(@Param() dto: FindConversationDto) {
    return this.conversationService.readById(dto.id);
  }
}
