import { SamController } from './sam.controller';
import { SamService } from './sam.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SamSchema } from './schemas/sam.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Sam', schema: SamSchema }])],
    controllers: [
        SamController,],
    providers: [
        SamService,],
})
export class SamModule { }
