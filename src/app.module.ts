import { ZanonModule } from './instruments/zanon/zanon.module';
import { PanasModule } from './instruments/panas/panas.module';
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
import { PatientModule } from './patient/patient.module';
import { SpecialistModule } from './specialist/specialist.module';

const dbConnect = process.env.NODE_ENV === 'development' ? process.env.MONGODBCONNECT_STG : process.env.MONGODBCONNECT_STG;

@Module({
  imports: [
    ZanonModule,
    PanasModule,
    PatientModule,
    SpecialistModule,
    SusModule,
    LeapModule,
    SamModule,
    TokenModule,
    AuthModule,
    MongooseModule.forRoot(dbConnect),
    UserModule,
  ],
  controllers: [
    AuthController, AppController],
  providers: [AppService],
})
export class AppModule { }
