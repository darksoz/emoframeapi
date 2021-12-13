import { forwardRef, Inject, Injectable, Req, Res } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/token/token.service';
import { Request, Response } from 'express';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        @Inject(forwardRef(()=>TokenService))
        private tokenService: TokenService
    ) {}

    async validateUser(userEmail: string, userPass: string): Promise<any> {
        const user = await this.userService.getByEmail(userEmail);
        if (user && user.password === userPass) {
          const { _id, name, email, usertype } = user;
          let result = { id: _id, name, email, usertype }
          return result;
        }
        return null;
    }

    async login(user: any, @Res({passthrough: true}) response: Response) {
        const payload = { email: user.email, name: user.name , usertype: user.usertype};
        const jwtAccessKey = this.jwtService.sign(payload);
        let tokenSave = {hash: jwtAccessKey, email: user.email};
        await this.tokenService.save(tokenSave);
        response.cookie("jwtAccessKey", jwtAccessKey);
        return {
          access_token: jwtAccessKey,
          email: user.email,
          name: user.name,  
          usertype: user.usertype,
        };
    }

    async logout(@Res({passthrough: true}) response: Response, @Req() request: Request) {
      response.clearCookie("jwtAccessKey");
      return {
        "logout": true
      };
    }
 }
