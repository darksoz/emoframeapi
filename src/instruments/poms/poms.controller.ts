/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';
import { UserGuard } from 'src/guard/user.guard';
import { Poms } from './poms';
import { PomsService } from './poms.service';

@Controller('api/poms')
export class PomsController {

    constructor(private pomsService: PomsService) {}
  //@UseGuards(JwtAuthGuard, UserGuard)
  @Post('create')
  async create(@Body() task: Poms): Promise<Poms> {
    return this.pomsService.create(task);
  }

  //@UseGuards(JwtAuthGuard, UserGuard)
  @Get(':name')
  async find(@Param('name') name): Promise<Poms[]> {
    return this.pomsService.getData(name);
  }

  //@UseGuards(JwtAuthGuard, UserGuard)
  @Get('id/:id')
  async getById(@Param('id') id): Promise<Poms> {
    return this.pomsService.getById(id);
  }
}
