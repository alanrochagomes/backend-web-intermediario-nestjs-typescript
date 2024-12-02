import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ValidationPipe
  app.useGlobalPipes(new ValidationPipe());

  // Swagger

  const config = new DocumentBuilder()

    .setTitle('Backend Web Intermediário - TypeScript e Nest.js')

    .setDescription(
      'API para assistente virtual inteligente, fornecendo recursos personalizados de aprendizado, FAQs dinâmicas e explicações detalhadas para alunos da Salvatore Academy.',
    )

    .setVersion('1.0')

    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
