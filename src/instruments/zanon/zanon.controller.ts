/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { Zanon } from './zanon';
import { ZanonService } from './zanon.service';

@Controller('api/zanon')
export class ZanonController {
    constructor(private zanonService: ZanonService){ }
    //@UseGuards(JwtAuthGuard)
    @Post('create')
    async create(@Body() task: Zanon) : Promise<Zanon>{
        return this.zanonService.create(task);
    }
}
