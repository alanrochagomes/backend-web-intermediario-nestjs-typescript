import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConversationModule } from './conversation/conversation.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ConversationModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
