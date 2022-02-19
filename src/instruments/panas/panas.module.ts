import { PanasService } from './panas.service';
import { PanasController } from './panas.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { PanasSchema } from './schemas/panas.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Panas', schema: PanasSchema }])],
    controllers: [
        PanasController,],
    providers: [
        PanasService,],
})
export class PanasModule { }
