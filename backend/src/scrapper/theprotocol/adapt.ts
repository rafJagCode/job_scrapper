import { Offer } from '../Offer.js';
import { TheprotocolOffer } from './TheProtocolOffer.js';

export const adapt = (offer: TheprotocolOffer): Offer => {
  const id = offer.id;
  const link = `https://theprotocol.it/szczegoly/praca/${offer.offerUrlName}`;
  const source = 'theprotocol';
  const title = offer.title;
  const cities = adaptCities(offer);
  const workModes = adaptWorkModes(offer);
  const experienceLevels = adaptExperienceLevel(offer);
  const published = offer.publicationDateUtc;
  const skills = offer.technologies;
  const salary = adaptSalary(offer);

  return { id, link, source, title, cities, workModes, experienceLevels, published, skills, salary };
};

const adaptCities = (offer: TheprotocolOffer): Offer['cities'] => {
  const cities = offer.workplace.map((workplace) => workplace.city).filter((city) => city.length);
  return cities;
};

const adaptWorkModes = (offer: TheprotocolOffer): Offer['workModes'] => {
  const work_modes = offer.workModes.reduce((acc, workMode) => {
    if (['hybrydowa', 'hybrid'].includes(workMode)) return [...acc, 'hybrid'];
    if (['stacjonarna', 'full office'].includes(workMode)) return [...acc, 'stationary'];
    return [...acc, 'remote'];
  }, []);
  return [...new Set(work_modes)];
};

const adaptExperienceLevel = (offer: TheprotocolOffer): Offer['experienceLevels'] => {
  const experience_levels = offer.positionLevels.reduce((acc, level) => {
    if (['assistant', 'blue collar', 'trainee', 'junior'].includes(level.value)) return [...acc, 'junior'];
    if (['head', 'manager', 'senior', 'expert', 'lead'].includes(level.value)) return [...acc, 'senior'];
    return [...acc, 'mid'];
  }, []);
  return [...new Set(experience_levels)];
};

const adaptSalary = (offer: TheprotocolOffer): Offer['salary'] => {
  if (!offer.salary) return null;
  const multiplier = ['monthly', 'miesięcznie'].includes(offer.salary.timeUnit.longForm) ? 1 : 40;
  const salary = offer.salary.to * multiplier;
  return { from: 0, to: salary };
};
