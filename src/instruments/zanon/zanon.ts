import {Document} from 'mongoose';

export class Zanon extends Document{
    Datetime: String;
    Instrument: String;
    Questions: Array<Object>;
    Username: String;
}