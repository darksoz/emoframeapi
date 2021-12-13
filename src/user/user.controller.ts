import { Body, Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';
import { UserGuard } from 'src/guard/user.guard';
import { User } from './user';
import { UserService } from './user.service';

@Controller('api')
export class UserController {
    constructor(private userService: UserService){ }
    @UseGuards(JwtAuthGuard, UserGuard)
    @Get('all')
    async getAll() : Promise<User[]>{
        return this.userService.getAll();
    }

    @UseGuards(JwtAuthGuard, UserGuard)
    @Get('user')
    async getById(@Body() id: string) : Promise<User>{
        return this.userService.getById(id);
    }

    @UseGuards(JwtAuthGuard, UserGuard)
    @Post('register')
    async create(@Body() task: User) : Promise<User>{
        return this.userService.create(task);
    }

    @UseGuards(JwtAuthGuard)
    @Put('update')
    async update(@Body() id : string, @Body() task: User){
        return this.userService.update(id, task);
    }
    
    @UseGuards(JwtAuthGuard, UserGuard)
    @Delete('delete')
    async delete(@Body() id: string){
        this.userService.delete(id);
    }

    @UseGuards(JwtAuthGuard)
    @Get('check')
    async verifyAuthentication(){
        return "Authenticated";
    }
}
