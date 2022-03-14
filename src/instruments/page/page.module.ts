import { PageController } from './page.controller';
import { PageService } from './page.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PageSchema } from './schemas/page.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Page', schema: PageSchema }])],
  controllers: [PageController],
  providers: [PageService],
})
export class PageModule {}
