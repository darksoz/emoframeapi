/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
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
}
