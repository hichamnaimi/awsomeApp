const express = require("express");
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 4000;

const musicRoutes = require('./routes/music');
const comptabilityRoutes = require('./routes/comptability');

app.use(cors());
app.use('/music', musicRoutes);
app.use('/comptability', comptabilityRoutes);

app.get('/', (req, res) => {
  res.status(200).send('Welcome to Ressources server !');
});

app.get('*', (req, res) => {
  res.status(404).send('Ooops no issues... try to escape from desert !');
});

app.listen(PORT, 'localhost', () => console.log(`Server is running on ${PORT}...`));