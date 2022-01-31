/*
https://docs.nestjs.com/providers#services
*/

import { forwardRef, HttpException, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/user';
import { UserService } from 'src/user/user.service';
import { Patient } from './patient';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PatientService {
    constructor(@InjectModel('Patient') 
                private readonly patientModel: Model<Patient>,
                @InjectModel('User')
                private readonly userModel: Model<User>){}

    async create(task: Patient){
        task.Password = await bcrypt.hashSync(task.Password, 10);
        const userTask = {
            name: task.FullName,
            email: task.Email,
            password: task.Password,
            usertype: task.Usertype,
        }
        
        const patientData = new this.patientModel(task);
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
