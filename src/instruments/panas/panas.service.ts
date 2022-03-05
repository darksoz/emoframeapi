/*
https://docs.nestjs.com/providers#services
*/

import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Panas } from './panas';

@Injectable()
export class PanasService {
    constructor(@InjectModel('Panas') private readonly panasModel: Model<Panas>){}

    async create(task: Panas ){
        const createdData = new this.panasModel(task);
        return await createdData.save();
    }

    async getData(name: String){
        try{
            return this.panasModel.find().where('Username').equals( { $regex: `${name}`, $options: 'i' }).exec();
        }
        catch(exc){
            new HttpException("error", 500);
        }
    }
}
