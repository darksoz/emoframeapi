import {Document} from 'mongoose';

export class Token extends Document{
    hash: String;
    email: String;
}