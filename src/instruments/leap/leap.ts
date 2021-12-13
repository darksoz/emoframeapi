import {Document} from 'mongoose';

export class Leap extends Document{
    Datetime: String;
    Instrument: String;
    Questions: Array<Object>;
    Username: String;
}