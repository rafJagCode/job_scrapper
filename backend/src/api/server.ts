import { readFile } from '../helpers/file.js';
import DataUpdater from '../scrapper/updating_data/DataUpdater.js';
import express, { Response, NextFunction } from 'express';
import cors from 'cors';
import vhost from 'vhost';
import dotenv from 'dotenv';
dotenv.config();

const dataUpdater = new DataUpdater();
const app = express();
const port = process.env.NODE_ENV === 'production' ? 666 : 8000;

dataUpdater.start();

app.use(cors());

const handleUpdating = (res: Response) => {
  res.status(503).send({ message: 'Server is now busy with updating job offers. Please try again in few minutes.' });
};

const sendFileContent = async (res: Response, next: NextFunction, filePath: string) => {
  try {
    const fileContent = await readFile(filePath);
    res.json(fileContent);
  } catch (err) {
    next(err);
  }
};

app.get('/offers', async (req, res, next) => {
  if (dataUpdater.isUpdating()) handleUpdating(res);
  else sendFileContent(res, next, 'all_offers.json');
});

app.get('/skills', async (req, res, next) => {
  if (dataUpdater.isUpdating()) handleUpdating(res);
  else sendFileContent(res, next, 'all_skills.json');
});

app.get('/cities', async (req, res, next) => {
  if (dataUpdater.isUpdating()) handleUpdating(res);
  else sendFileContent(res, next, 'all_cities.json');
});

if (process.env.NODE_ENV === 'production') {
  const virtualApp = express();
  const domain = 'jobsearch.rafaljagielski.ovh';
  virtualApp.use(vhost(domain, app));
  virtualApp.listen(port, () => {
    console.log(`Server running on ${domain} on port ${port}`);
  });
} else {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
