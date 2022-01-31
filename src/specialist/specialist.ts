import {Document} from 'mongoose';

export class Specialist extends Document{
    Email: String;
    FullName: String;
    Gender: String;
    Name: String;
    Password: String;
    PhoneNumber: String;
    EmploymentPlace: String;
    Specialty: String;
    SocialName: String;
    Surname: String;
    Usertype: String;
}