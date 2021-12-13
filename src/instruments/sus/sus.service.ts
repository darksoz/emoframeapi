/*
https://docs.nestjs.com/providers#services
*/

import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Mongoose } from 'mongoose';
import { Sus } from './sus';
import * as mongoose from 'mongoose';


@Injectable()
export class SusService { 
    constructor(@InjectModel('Sus') private readonly susModel: Model<Sus>){}

    async create(task: Sus ){
        const createdData = new this.susModel(task);
        return await createdData.save();
    }

    async getData(json: Object){
        let name = json["name"];
        let data = await this.susModel.find().exec();
        console.log("name => ", json);
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
            console.log("dados ", await this.susModel.findById(id).exec());
            return await this.susModel.findById(id).exec();
        }
        catch(exc){
            new HttpException("error", 500);
        }
    }
}
