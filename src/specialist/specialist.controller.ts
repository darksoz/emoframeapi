/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';
import { UserGuard } from 'src/guard/user.guard';
import { Specialist } from './specialist';
import { SpecialistService } from './specialist.service';

@Controller('api')
export class SpecialistController { 
    constructor(private specialistService: SpecialistService){ }
    
    //@UseGuards(JwtAuthGuard, UserGuard)
    @Post('specialist/register')
    async create(@Body() task: Specialist) : Promise<any>{
        return this.specialistService.create(task);
    }
}
