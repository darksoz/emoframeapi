import * as mongoose  from 'mongoose';

export const SamSchema = new mongoose.Schema({
    Datetime: String,
    Instrument: String,
    Questions: Array<Object>({id: String, answer: Number}),
    Username: String,
})