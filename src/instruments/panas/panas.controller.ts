/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';
import { Panas } from './panas';
import { PanasService } from './panas.service';

@Controller('api/panas')
export class PanasController {
    constructor(private panasService: PanasService){ }
    //@UseGuards(JwtAuthGuard)
    @Post('create')
    async create(@Body() task: Panas) : Promise<Panas>{
        return this.panasService.create(task);
    }

    @Get(':id')
    async getById(@Param('id') id) : Promise<Panas>{
        return this.panasService.getById(id);
    }
}
