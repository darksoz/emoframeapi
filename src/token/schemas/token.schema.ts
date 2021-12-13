import * as mongoose  from 'mongoose';

export const TokenSchema = new mongoose.Schema({
    hash: String,
    email: String,
})