import ENV from './config/env.js'
import express from 'express'
import cors from 'cors'
import connectMongoDB from './config/dbMongo.js'
import path from 'path'
import { fileURLToPath } from 'url'
import candidatureRouter from './router/candidature.router.js'


const app = express()

// IMPORT DES ROUTES 

// CONNEXION MONGO
connectMongoDB(ENV.URI_MONGO, ENV.DB_NAME);


// MIDDLEWARES
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))
app.use(express.json())

// PREFIX
app.use('/api/candidatures', candidatureRouter);
// app.use('/api/statistiques');

// Serve frontend static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../front-end-2/dist')));

// Catch-all route to serve index.html for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../front-end-2/dist/index.html'));
});

export default app


// un module est liée a une table
