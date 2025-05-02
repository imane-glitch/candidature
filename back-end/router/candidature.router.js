import express from 'express';
import { createCandidature, updateCandidature } from '../controllers/candidatures.controller.js';

const router = express.Router();

router.post('/ajouter', createCandidature);
router.put('/:id', updateCandidature);

export default router;