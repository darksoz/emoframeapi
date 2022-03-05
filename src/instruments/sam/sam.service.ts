/*
https://docs.nestjs.com/providers#services
*/

import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sam } from './sam';

@Injectable()
export class SamService {
    constructor(@InjectModel('Sam') private readonly samModel: Model<Sam>){}

    async create(task: Sam ){
        const createdData = new this.samModel(task);
        return await createdData.save();
    }

    async getData(name: String){
        try{
            return this.samModel.find().where('Username').equals( { $regex: `${name}`, $options: 'i' }).exec();
        }
        catch(exc){
            new HttpException("error", 500);
        }
    }
}
