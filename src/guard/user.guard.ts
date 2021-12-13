/*
https://docs.nestjs.com/guards#guards
*/

import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class UserGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean  {
    const {user}  = context.switchToHttp().getRequest();
    if(user && user.usertype == "Admin" || user.usertype == "Specialist"){
      return true;
    }

    throw new UnauthorizedException(`Unauthorized user`);
  }
}
