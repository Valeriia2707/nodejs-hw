import { Router } from 'express';
import { getAllNotes, getNoteById } from '../controllers/notesController';

router.get('/notes', getAllNotes);
router.get('/notes/:noteId', getNoteById);

const router = Router();

export default router;
