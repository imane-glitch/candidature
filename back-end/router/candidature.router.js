import express from 'express'
import { createCandidature, readCandidatures } from '../controllers/candidatures.controller.js';


const router = express.Router();

router.post('/add', createCandidature);
router.get('/get', readCandidatures);


export default router