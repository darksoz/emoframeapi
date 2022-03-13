/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';
import { UserGuard } from 'src/guard/user.guard';
import { Leap } from './leap';
import { LeapService } from './leap.service';

@Controller('api/leap')
export class LeapController {
    constructor(private leapService: LeapService){ }
    @UseGuards(JwtAuthGuard)
    @Post('create')
    async create(@Body() task: Leap) : Promise<Leap>{
        return this.leapService.create(task);
    }

    @UseGuards(JwtAuthGuard, UserGuard)
    @Get(':name')
    async find(@Param('name') name) : Promise<Leap[]>{
        return this.leapService.getData(name);
    }

    @UseGuards(JwtAuthGuard, UserGuard)
    @Get('id/:id')
    async getById(@Param('id') id) : Promise<Leap>{
        return this.leapService.getById(id);
    }
}
