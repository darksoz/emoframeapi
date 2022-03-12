/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';
import { UserGuard } from 'src/guard/user.guard';
import { Zanon } from './zanon';
import { ZanonService } from './zanon.service';

@Controller('api/zanon')
export class ZanonController {
    constructor(private zanonService: ZanonService){ }
    @UseGuards(JwtAuthGuard)
    @Post('create')
    async create(@Body() task: Zanon) : Promise<Zanon>{
        return this.zanonService.create(task);
    }

    @UseGuards(JwtAuthGuard, UserGuard)
    @Get(':name')
    async find(@Param('name') name) : Promise<Zanon[]>{
        return this.zanonService.getData(name);
    }

    @UseGuards(JwtAuthGuard, UserGuard)
    @Get('id/:id')
    async getById(@Param('id') id) : Promise<Zanon>{
        return this.zanonService.getById(id);
    }
}
