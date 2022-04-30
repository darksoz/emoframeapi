import { Document } from 'mongoose';

export class Poms extends Document {
  Datetime: String;
  Instrument: String;
  Questions: Array<Object>;
  Username: String;
}