import { Schema } from 'mongoose';
import mongoose from 'mongoose';

const noteSchema = new Schema({
  note: {
    type: String,
    required: true,
  },
  assignee: {
    type: String,
    requried: true,
  },
  status: {
    type: String,
    enum: ['in-progress', 'completed'],
    default: 'in-progress',
  },
});

export const noteModel = mongoose.model('note', noteSchema);
