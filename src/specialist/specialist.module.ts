import { SpecialistController } from './specialist.controller';
import { SpecialistService } from './specialist.service';
/*
https://docs.nestjs.com/modules
*/

import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/user/schemas/users.schema';
import { UserModule } from 'src/user/user.module';
import { SpecialistSchema } from './schemas/specialist.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Specialist', schema: SpecialistSchema}]), 
              MongooseModule.forFeature([{ name: 'User', schema: UserSchema}]),          
              forwardRef(()=>UserModule)],
    controllers: [SpecialistController],
    providers: [SpecialistService],
})
export class SpecialistModule { }
