import { Router } from 'express';
import { Note } from '../models/notes';

const router = Router();

router.get('/notes', async (req, res) => {
  const students = await Note.find();
  res.status(200).json(students);
});

router.get('/notes/:noteId', async (req, res) => {
  const id_param = req.params.noteId;
  const note = await Note.findById();
  if (!note) {
    return res.status(404).json({ message: 'Note is not found' });
  }
  res.status(200).json({ message: `Retrieved note with ID: ${id_param}` });
});

export default router;
