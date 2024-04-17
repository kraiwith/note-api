import { Schema } from 'mongoose';
import mongoose from 'mongoose';

const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  assignee: {
    type: String,
    requried: true,
    default: '',
  },
  status: {
    type: String,
    enum: ['in-progress', 'completed'],
    required: false,
    default: 'in-progress',
  },
  tags: {
    type: [String],
    required: false,
    default: [],
  },
  createDate: {
    type: Date,
    required: false,
    default: new Date(),
  },
  updateDate: {
    type: Date,
    required: false,
    default: undefined,
  },
});

export const noteModel = mongoose.model('note', noteSchema);
