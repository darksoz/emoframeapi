import { SusService } from './sus.service';
import { SusController } from './sus.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SusSchema } from './schemas/sus.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Sus', schema: SusSchema }])],
    controllers: [
        SusController,],
    providers: [
        SusService,],
})
export class SusModule { }
