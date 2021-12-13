import { TokenController } from './token.controller';
import { TokenService } from './token.service';

import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenSchema } from './schemas/token.schema';
import { UserSchema } from 'src/user/schemas/users.schema';
import { UserModule } from 'src/user/user.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Tokens', schema: TokenSchema }]),
        MongooseModule.forFeature([{name: 'Users', schema: UserSchema}]),
        forwardRef(()=>AuthModule),
        UserModule
    ],
    controllers: [TokenController],
    providers: [TokenService],
    exports: [TokenService]
})
export class TokenModule { }
