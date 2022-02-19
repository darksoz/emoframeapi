import * as mongoose  from 'mongoose';

export const ZanonSchema = new mongoose.Schema({
    Datetime: String,
    Instrument: String,
    Questions: Array<Object>({id: String, answer: Number}),
    Username: String,
});