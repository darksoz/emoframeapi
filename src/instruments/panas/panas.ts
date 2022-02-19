import {Document} from 'mongoose';

export class Panas extends Document{
    Datetime: String;
    Instrument: String;
    Questions: Array<Object>;
    Username: String;
}