import express from 'express';
import { readFile } from '../helpers/file.js';

const app = express();

app.get('/', async (req, res, next) => {
  const offers = await readFile('100_offers.json');
  res.json(offers);
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
