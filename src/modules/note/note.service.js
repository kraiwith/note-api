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

export function getNotes(query) {
  let baseQuery = {};
  if (query.search) {
    baseQuery = {
      ...baseQuery,
      note: {
        $regex: new RegExp(query.search, 'i'),
      },
    };
  }
  if (query.status) {
    baseQuery = {
      ...baseQuery,
      status: query.status,
    };
  }
  return noteModel.find({ ...baseQuery });
}
