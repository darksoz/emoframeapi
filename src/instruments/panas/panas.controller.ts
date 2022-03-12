/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';
import { UserGuard } from 'src/guard/user.guard';
import { Panas } from './panas';
import { PanasService } from './panas.service';

@Controller('api/panas')
export class PanasController {
    constructor(private panasService: PanasService){ }
    @UseGuards(JwtAuthGuard)
    @Post('create')
    async create(@Body() task: Panas) : Promise<Panas>{
        return this.panasService.create(task);
    }

    @UseGuards(JwtAuthGuard, UserGuard)
    @Get(':name')
    async find(@Param('name') name) : Promise<Panas[]>{
        return this.panasService.getData(name);
    }

    @UseGuards(JwtAuthGuard, UserGuard)
    @Get('id/:id')
    async getById(@Param('id') id) : Promise<Panas>{
        return this.panasService.getById(id);
    }
}
