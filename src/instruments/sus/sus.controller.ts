import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/shared/jwt-auth.guard";
import { UserGuard } from "src/guard/user.guard";
import { Sus } from "./sus";
import { SusService } from "./sus.service";

@Controller('api/sus')
export class SusController {
    constructor(private SusService: SusService){ }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    async create(@Body() task: Sus) : Promise<Sus>{
        return this.SusService.create(task);
    }

    @UseGuards(JwtAuthGuard, UserGuard)
    @Get(':name')
    async find(@Param('name') name) : Promise<Sus[]>{
        return this.SusService.getData(name);
    }

    @UseGuards(JwtAuthGuard, UserGuard)
    @Get('id/:id')
    async getById(@Param('id') id) : Promise<Sus>{
        return this.SusService.getById(id);
    }
}

