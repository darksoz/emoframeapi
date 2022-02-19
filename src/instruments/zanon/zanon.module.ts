import { ZanonService } from './zanon.service';
import { ZanonController } from './zanon.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ZanonSchema } from './schemas/zanon.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Zanon', schema: ZanonSchema }])],
    controllers: [
        ZanonController,],
    providers: [
        ZanonService,],
})
export class ZanonModule { }
