import { Router } from 'express';
import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController';

router.get('/notes', getAllNotes);
router.get('/notes/:noteId', getNoteById);
router.post('/note', createNote);
router.delete('/note/:noteId', deleteNote);
router.patch('/notes/:noteId', updateNote);

const router = Router();

export default router;
