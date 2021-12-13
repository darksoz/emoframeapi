import * as mongoose  from 'mongoose';

export const LeapSchema = new mongoose.Schema({
    Datetime: String,
    Instrument: String,
    Questions: Array<Object>({id: Number, answer: Number}),
    Username: String,
})