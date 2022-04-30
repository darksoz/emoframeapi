import * as mongoose  from 'mongoose';

export const PomsSchema = new mongoose.Schema({
    Datetime: String,
    Instrument: String,
    Questions: Array<Object>({id: Number, answer: Number}),
    Username: String,
})

