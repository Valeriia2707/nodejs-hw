import { Note } from '../models/notes';
import createHttpError from 'http-errors';

export const getAllNotes = async (req, res) => {
  const students = await Note.find();
  res.status(200).json(students);
};

export const getNoteById = async (req, res) => {
  const id_param = req.params.noteId;
  const note = await Note.findById(id_param);
  if (!note) {
    throw createHttpError(404, 'Note not found');
  }
  res.status(200).json(note);
};
