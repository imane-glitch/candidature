import ENV from './config/env.js'
import express from 'express'
import connectMongoDB from './config/dbMongo.js'
import candidatureRouter from './router/candidature.router.js'


const app = express()

// IMPORT DES ROUTES 

// CONNEXION MONGO
connectMongoDB(ENV.URI_MONGO, ENV.DB_NAME);


// MIDDLEWARES
app.use(express.json())

// PREFIX
app.use('/api/candidatures', candidatureRouter);
// app.use('/api/statistiques');

// Add root route handler to fix "error cannot get"
app.get('/', (req, res) => {
    res.send('API is running');
});

export default app


// un module est liée a une table  
