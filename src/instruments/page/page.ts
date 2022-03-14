import { Document } from 'mongoose';

export class Page extends Document {
  Datetime: String;
  Instrument: String;
  Questions: Array<Object>;
  Username: String;
}
