import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule,{ cors: true,  bodyParser: true });
  app.setGlobalPrefix('api');
  // app.enableCors()
  const opt = new DocumentBuilder().setTitle('api').setDescription('descri').addTag('1.0').build()
  const doc = SwaggerModule.createDocument(app, opt)
  SwaggerModule.setup('docs',app, doc)
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
