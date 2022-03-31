import * as mongoose from 'mongoose';
import { type } from 'os';

export const PageSchema = new mongoose.Schema({
  Datetime: String,
  Instrument: String,
  Questions: Array<Object>({ id: String, answer: String }),
  Evaluation: Array<Object>({ id: Number || String, answer: Number || String }),
  UserDataForm: Array<Object>({ id: String, answer: String }),
  Username: String,
});
