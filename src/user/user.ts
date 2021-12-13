import {Document} from 'mongoose';

export class User extends Document{
    name: String;
    email: String;
    password: String;
    username: String;
    usertype: String;
}