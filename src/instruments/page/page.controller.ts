/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  Put,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';
import { UserGuard } from 'src/guard/user.guard';
import { Page } from './page';
import { PageService } from './page.service';

@Controller('api/page')
export class PageController {
  constructor(private pageService: PageService) {}
  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() task: Page): Promise<Page> {
    return this.pageService.create(task);
  }

  @UseGuards(JwtAuthGuard, UserGuard)
  @Get(':name')
  async find(@Param('name') name): Promise<Page[]> {
    return this.pageService.getData(name);
  }

  @UseGuards(JwtAuthGuard, UserGuard)
  @Get('id/:id')
  async getById(@Param('id') id): Promise<Page> {
    return this.pageService.getById(id);
  }
  @UseGuards(JwtAuthGuard, UserGuard)
  @Put(':id')
  async update(@Param('id') id, @Body() task: Page): Promise<Page> {
    return this.pageService.update(id, task);
  }
}
