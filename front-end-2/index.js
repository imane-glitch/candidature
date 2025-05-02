// index.js
const express = require('express');
const app = express();
const CandidatureRoute = require('./routes/CandidatureRoute');

app.use(express.json());
app.use('/api', CandidatureRoute);

app.listen(5173, () => {
  console.log('Serveur démarré sur le port 5173');
});
