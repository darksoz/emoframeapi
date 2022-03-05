/*
https://docs.nestjs.com/providers#services
*/

import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Zanon } from './zanon';

@Injectable()
export class ZanonService { 
    constructor(@InjectModel('Zanon') private readonly zanonModel: Model<Zanon>){}

    async create(task: Zanon ){
        const createdData = new this.zanonModel(task);
        return await createdData.save();
    }

    async getData(name: String){
        try{
            return this.zanonModel.find().where('Username').equals( { $regex: `${name}`, $options: 'i' }).exec();
        }
        catch(exc){
            new HttpException("error", 500);
        }
    }
}
