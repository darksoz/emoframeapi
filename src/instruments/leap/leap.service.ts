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

    async getData(json: Object){
        let name = json["name"];
        let data = await this.leapModel.find().exec();
        try{
            var filteredData =  data.filter(json => json.Username.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
            return await filteredData;
        }
        catch(exc){
            new HttpException("error", 500);
        }
    }

    async getById(json: Object){
        let id = json["id"];
        try{
            return await this.leapModel.findById(id).exec();
        }
        catch(exc){
            new HttpException("error", 500);
        }
    }
}

