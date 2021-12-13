import { SusModule } from './instruments/sus/sus.module';
import { LeapModule } from './instruments/leap/leap.module';
import { SamModule } from './instruments/sam/sam.module';
import { TokenModule } from './token/token.module';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    SusModule,
    LeapModule,
    SamModule,
    TokenModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost:/emoframestg'),
    UserModule,
  ],
  controllers: [
    AuthController, AppController],
  providers: [AppService],
})
export class AppModule { }
