/*
https://docs.nestjs.com/providers#services
*/

import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Leap } from './leap';

@Injectable()
export class LeapService {
    constructor(@InjectModel('Leap') private readonly leapModel: Model<Leap>){}

    async create(task: Leap ){
        const createdData = new this.leapModel(task);
        return await createdData.save();
    }

    async getData(name: String){
        try{
            return this.leapModel.find().where('Username').equals( { $regex: `${name}`, $options: 'i' }).exec();
        }
        catch(exc){
            new HttpException("error", 500);
        }
    }

    async getById(id: String){
        try{
            return await this.leapModel.findById(id).exec();
        }
        catch(exc){
            new HttpException("error", 500);
        }
    }
}

