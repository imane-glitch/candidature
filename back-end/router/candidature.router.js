import express from 'express';
import { createCandidature, updateCandidature, readCandidatures, deleteCandidature } from '../controllers/candidatures.controller.js';

const router = express.Router();

router.get('/', readCandidatures);
router.post('/ajouter', createCandidature);
router.put('/:id', updateCandidature);
router.delete('/:id', deleteCandidature);

export default router;
