/*
https://docs.nestjs.com/providers#services
*/

import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Mongoose } from 'mongoose';
import { Sus } from './sus';


@Injectable()
export class SusService { 
    constructor(@InjectModel('Sus') private readonly susModel: Model<Sus>){}

    async create(task: Sus ){
        const createdData = new this.susModel(task);
        return await createdData.save();
    }

    async getData(name: String){
        try{
            return this.susModel.find().where('Username').equals( { $regex: `${name}`, $options: 'i' }).exec();
        }
        catch(exc){
            new HttpException("error", 500);
        }
    }

    async getById(id: String){
        try{
            return await this.susModel.findById(id).exec();
        }
        catch(exc){
            new HttpException("error", 500);
        }
    }
}
