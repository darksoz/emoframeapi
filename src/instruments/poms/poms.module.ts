import { PomsService } from './poms.service';
import { PomsController } from './poms.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PomsSchema } from './schemas/poms.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Poms', schema: PomsSchema }])],
    controllers: [
        PomsController,],
    providers: [
        PomsService,],
})
export class PomsModule { }
