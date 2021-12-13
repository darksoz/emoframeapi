import { Body, Controller, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { TokenService } from './token.service';

@Controller('api')
export class TokenController { 
    constructor(private readonly tokenService: TokenService){}

    @Put('token/refresh')
    async refresh(@Body() token: string, @Res({passthrough: true}) response: Response){
        return this.tokenService.refreshToken(token, response);
    }
}

