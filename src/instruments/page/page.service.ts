/*
https://docs.nestjs.com/providers#services
*/

import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Page } from './page';

@Injectable()
export class PageService {
  constructor(@InjectModel('Page') private readonly pageModel: Model<Page>) {}

  async create(task: Page) {
    const createdData = new this.pageModel(task);
    return await createdData.save();
  }

  async getData(name: string) {
    try {
      return this.pageModel
        .find()
        .where('Username')
        .equals({ $regex: `${name}`, $options: 'i' })
        .exec();
    } catch (exc) {
      new HttpException('error', 500);
    }
  }

  async getById(id: string) {
    try {
      return await this.pageModel.findById(id).exec();
    } catch (exc) {
      new HttpException('error', 500);
    }
  }
  async update(id: string, task: Page) {
    try {
      return await this.pageModel.findByIdAndUpdate(id, task, {
        new: true,
      });
    } catch (exc) {
      new HttpException('error', 500);
    }
  }

  async getByUserId(id: string) {
    try {
      return await this.pageModel
        .find({UserDataForm : {$elemMatch: {id : "Id", answer: `${id}`}}})
        .exec();
    } catch (exc) {
      new HttpException('error', 500);
    }
  }
}
