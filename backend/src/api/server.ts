import express from 'express';
import cors from 'cors';
import { readFile } from '../helpers/file.js';

const app = express();

app.use(cors());

app.get('/offers', async (req, res, next) => {
  const offers = await readFile('100_offers.json');
  res.json(offers);
});

app.get('/skills', async (req, res, next) => {
  const skills = await readFile('simple.json');
  res.json(skills);
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
