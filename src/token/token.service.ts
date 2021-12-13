import { forwardRef, HttpException, HttpStatus, Inject, Injectable, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Response } from 'express';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/shared/auth.service';
import { User } from 'src/user/user';
import { UserService } from 'src/user/user.service';
import { Token } from './token';

@Injectable()
export class TokenService {
    constructor(
        @InjectModel('Tokens') private readonly tokenModel: Model<Token>,
        private readonly userService: UserService,
        @Inject(forwardRef(()=>AuthService))
        private readonly authService: AuthService
    ){}

    async save(task: any){
        const user = await this.tokenModel.findOne({email: task.email});
        let data = new this.tokenModel(task);
        if(user){
            await this.tokenModel.updateOne({_id: user.id}, task).exec();
        }
        else{
            return await data.save();
        }
    }

    async refreshToken(data: any, @Res({passthrough: true}) response: Response){
        const token = await this.tokenModel.findOne({hash: data.oldToken});
        if(token){
            let user = await this.userService.getByEmail(token.email);
            return this.authService.login(user, response);
        }
        else{
            return new HttpException({errorMessage: 'Invalid Token'}, HttpStatus.UNAUTHORIZED);
        }
        
    }
}
