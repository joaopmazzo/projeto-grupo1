import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaUniqueConstraintFilter } from './common/ExcpetionsFilters/exceptionsfilters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new PrismaUniqueConstraintFilter());
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
