import { LeapController } from './leap.controller';
import { LeapService } from './leap.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LeapSchema } from './schemas/leap.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Leap', schema: LeapSchema }])],
    controllers: [
        LeapController,],
    providers: [
        LeapService,],
})
export class LeapModule { }
