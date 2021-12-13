import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
var cors = require('cors');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.use(jsonParser);
  app.use(cors());
  await app.listen(5000);
  
}
bootstrap();
