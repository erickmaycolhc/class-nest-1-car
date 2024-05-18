import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes( 
    new ValidationPipe({
    whitelist: true,  // whitelist mandá solo la lista del interface pero si ve algo demás lo imprime y no te arroja error en el postman 
   
    forbidNonWhitelisted: true, // forbidNonWhitelisted te manda la lista y si ve algo de mas manda un error     
    })
   );
  await app.listen(3000);
}
bootstrap();
