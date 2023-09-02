import getFormatedOffers from './formatting_offers/getFormatedOffers.js';
import extractAllSkills from './extracting_data/extractAllSkills.js';
import extractAllCities from './extracting_data/extractAllCities.js';
import { writeFile } from '../helpers/file.js';

const offers = await getFormatedOffers();
const skills = extractAllSkills(offers).sort();
const cities = extractAllCities(offers).sort();

await writeFile('all_offers.json', offers);
await writeFile('all_skills.json', skills);
await writeFile('all_cities.json', cities);
