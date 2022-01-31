import * as mongoose  from 'mongoose';

export const SpecialistSchema = new mongoose.Schema({
    Email:{ 
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
      },
    FullName: String,
    Gender: String,
    Name: String,
    Password: String,
    PhoneNumber: String,
    EmploymentPlace: String,
    Specialty: String,
    SocialName: String,
    Surname: String,
    Usertype: String,
})