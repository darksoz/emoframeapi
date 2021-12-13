import {Document} from 'mongoose';

export class Sam extends Document{
    Datetime: String;
    Questions: Array<Object>;
    Instrument: String;
    Username: String;
}