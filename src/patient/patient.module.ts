import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';
/*
https://docs.nestjs.com/modules
*/

import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientSchema } from './schemas/patient.schema';
import { UserModule } from 'src/user/user.module';
import { UserSchema } from 'src/user/schemas/users.schema';


@Module({
    imports: [MongooseModule.forFeature([{ name: 'Patient', schema: PatientSchema}]), 
              MongooseModule.forFeature([{ name: 'User', schema: UserSchema}]),          
              forwardRef(()=>UserModule)],
    controllers: [PatientController],
    providers: [PatientService],
})
export class PatientModule { }
