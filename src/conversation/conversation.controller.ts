import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { StartConversationDto } from './dto/start-conversation.dto';
import { ConversationService } from './conversation.service';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

@Controller('conversation')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
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
  startConversation(@Body() dto: StartConversationDto) {
    return this.conversationService.startConversation(dto);
  }
}
