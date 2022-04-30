/*
https://docs.nestjs.com/providers#services
*/

import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Poms } from './poms';

@Injectable()
export class PomsService {

    constructor(@InjectModel('Poms') private readonly pomsModel: Model<Poms>) { }

    async create(task: Poms) {
        const createdData = new this.pomsModel(task);
        return await createdData.save();
    }

    async getData(name: String) {
        try {
            return this.pomsModel
                .find()
                .where('Username')
                .equals({ $regex: `${name}`, $options: 'i' })
                .exec();
        } catch (exc) {
            new HttpException('error', 500);
        }
    }

    async getById(id: String) {
        try {
            return await this.pomsModel.findById(id).exec();
        } catch (exc) {
            new HttpException('error', 500);
        }
    }

}
