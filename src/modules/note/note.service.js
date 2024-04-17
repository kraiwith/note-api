import { noteModel } from '../../models/note.model';

export function createNote(noteData) {
  const newNote = new noteModel(noteData);
  return newNote.save();
}

export function updateNoteById(id, noteData) {
  return noteModel.findByIdAndUpdate(id, noteData);
}

export function deleteNoteById(id) {
  return noteModel.findByIdAndDelete(id);
}

export function getNoteById(id) {
  return noteModel.findById(id);
}

export async function getNotes(query) {
  let baseQuery = {};

  if (query.name && query.filter) {
    baseQuery = {
      ...baseQuery,
      [query.name]: {
        $regex: new RegExp(query.filter, 'i'),
      },
    };
  }

  if (query.status) {
    baseQuery = {
      ...baseQuery,
      status: query.status,
    };
  }

  let queryTags = [];
  if (query.tags && typeof query.tags === 'string') {
    queryTags = query.tags.split(',');
  } else if (query.tags && typeof query.tags === 'object') {
    queryTags = query.tags;
  }

  if (queryTags.length) {
    baseQuery = {
      ...baseQuery,
      tags: { $in: queryTags },
    };
  }

  return noteModel.find({ ...baseQuery });
}
