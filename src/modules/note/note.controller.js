import { Router } from 'express';
import { createNote, deleteNoteById, getNoteById, getNotes, updateNoteById } from './note.service';

export const router = Router();

router.post(`/note`, async (request, response) => {
  try {
    const newNote = await createNote(request.body);
    response.send(newNote);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.patch('/note/:id', async (request, response) => {
  try {
    const updateNote = await updateNoteById(request.params.id, request.body);
    response.send(updateNote);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.delete('/note/:id', async (request, response) => {
  try {
    await deleteNoteById(request.params.id);
    response.send({
      id: request.params.id,
      isDeleted: true,
    });
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get('/note/:id', async (request, response) => {
  try {
    const noteData = await getNoteById(request.params.id);
    if (noteData) {
      response.send(noteData);
    } else {
      response.status(404).send({ message: 'No Found!' });
    }
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get('/notes', async (request, response) => {
  try {
    const list = await getNotes(request.query);
    response.send(list);
  } catch (error) {
    response.status(500).send(error);
  }
});
