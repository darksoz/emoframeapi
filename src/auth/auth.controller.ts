/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Response, Request } from 'express';
import { AuthService } from './shared/auth.service';
import { JwtAuthGuard } from './shared/jwt-auth.guard';
import { LocalGuardGuard } from './shared/local-guard.guard';

@Controller('api')
export class AuthController { 
  constructor(
    private authService: AuthService
  ){}
  @UseGuards(LocalGuardGuard)
  @Post('auth/login')
  async login(@Req() req, @Res({passthrough: true}) response: Response) {
    return this.authService.login(req.user, response);
  }

  @UseGuards(JwtAuthGuard)
  @Post('auth/logout')
  async logout(@Res({passthrough: true}) response: Response, @Req() request: Request) {
    return this.authService.logout(response, request);
  }
}
