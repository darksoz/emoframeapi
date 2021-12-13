import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>){}

    async getAll(){
        return await this.userModel.find().exec();
    }

    async getById(id: string){
        return await this.userModel.findById(id).exec();
    }
    
    async getByEmail(email: any){
        return await this.userModel.findOne({email}).exec();
    }
    
    async create(task: User ){
        const createdData = new this.userModel(task);
        return await createdData.save();
    }

    async update(id: string, task: User){
        await this.userModel.updateOne({_id: id}, task).exec();
        return this.getById(id);
    }

    async delete(id: string){
        return await this.userModel.deleteOne({_id: id}).exec();
    }

}

