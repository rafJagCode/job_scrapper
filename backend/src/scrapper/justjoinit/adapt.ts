import { Offer } from '../Offer.js';
import { JustJoinItOffer } from './JustJoinItOffer.js';

export const adapt = (offer: JustJoinItOffer): Offer => {
  const id = offer.slug;
  const link = `https://justjoin.it/offers/${offer.slug}`;
  const source = 'justjoinit';
  const title = offer.title;
  const cities = [offer.city];
  const workModes = adaptWorkModes(offer);
  const experienceLevels = adaptExperienceLevels(offer);
  const published = offer.publishedAt;
  const skills = offer.requiredSkills;
  const salary = adaptSalary(offer);
  return { id, link, source, title, cities, workModes, experienceLevels, published, skills, salary };
};

const adaptWorkModes = (offer: JustJoinItOffer): Offer['workModes'] => {
  const work_modes = [];
  if (offer.workplaceType === 'office') work_modes.push('stationary');
  else work_modes.push(offer.workplaceType);
  return work_modes;
};

const adaptExperienceLevels = (offer: JustJoinItOffer): Offer['experienceLevels'] => {
  return [offer.experienceLevel === 'c_level' ? 'senior' : offer.experienceLevel];
};

const adaptSalary = (offer: JustJoinItOffer): Offer['salary'] => {
  let maxFrom = 0;
  let maxTo = 0;
  for (const { from, to } of offer.employmentTypes) {
    maxFrom = Math.max(maxFrom, from);
    maxTo = Math.max(maxTo, to);
  }
  return !maxTo ? null : { from: maxFrom, to: maxTo };
};
