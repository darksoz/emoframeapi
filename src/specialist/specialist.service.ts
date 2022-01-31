/*
https://docs.nestjs.com/providers#services
*/

import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/user/user';
import { Specialist } from './specialist';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';

@Injectable()
export class SpecialistService {
    constructor(@InjectModel('Specialist') 
                private readonly specialistModel: Model<Specialist>,
                @InjectModel('User')
                private readonly userModel: Model<User>){}

    async create(task: Specialist){
        task.Password = await bcrypt.hashSync(task.Password, 10);
        const userTask = {
            name: task.FullName,
            email: task.Email,
            password: task.Password,
            usertype: task.Usertype,    
        }
        const patientData = new this.specialistModel(task);
        const userData = new this.userModel(userTask);
        try{
            await patientData.save();
            return await userData.save();
        }
        catch(exc){
           return new HttpException("email already registered", 500);
        }
    }
}
