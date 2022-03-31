import { Document } from 'mongoose';

export class Page extends Document {
  Datetime: string;
  Instrument: string;
  Questions: Array<unknown>;
  UserDataForm: Array<unknown>;
  Evaluation: Array<Object>;
  Username: string;
}
