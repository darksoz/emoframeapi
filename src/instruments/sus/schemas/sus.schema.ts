import * as mongoose  from 'mongoose';

export const SusSchema = new mongoose.Schema({
    Datetime: String,
    Instrument: String,
    Questions: Array<Object>({id: String, answer: Number}),
    Solution: String,
    Username: String,
})