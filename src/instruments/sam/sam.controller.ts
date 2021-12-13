/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';
import { Sam } from './sam';
import { SamService } from './sam.service';

@Controller('api/sam')
export class SamController {
    constructor(private samService: SamService){ }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    async create(@Body() task: Sam) : Promise<Sam>{
        return this.samService.create(task);
    }
}
