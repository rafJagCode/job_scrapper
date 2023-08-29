import { Offer } from '../Offer.js';
import { JustJoinItOffer } from './JustJoinItOffer.js';

export const adapt = (offer: JustJoinItOffer): Offer => {
  const source = 'justjoinit';
  const title = offer.title;
  const cities = [offer.city];
  const work_modes = adaptWorkModes(offer);
  const experience_levels = [offer.experience_level];
  const published = offer.published_at;
  const skills = adaptSkills(offer);
  const salary = adaptSalary(offer);
  return { source, title, cities, work_modes, experience_levels, published, skills, salary };
};

const adaptWorkModes = (offer: JustJoinItOffer): Offer['work_modes'] => {
  const work_modes = [];
  if (offer.workplace_type === 'office') work_modes.push('stationary');
  else if (offer.workplace_type === 'partly_remote') work_modes.push('hybrid');
  else work_modes.push('remote');
  return work_modes;
};

const adaptSkills = (offer: JustJoinItOffer): Offer['skills'] => {
  const skills = offer.skills.map((skill) => skill.name);
  return skills;
};

const adaptSalary = (offer: JustJoinItOffer): Offer['salary'] => {
  const typeWithMaxSalary = offer.employment_types.reduce((acc, type) => {
    if (!acc && !type.salary) return null;
    else if (!acc && type.salary) return type;
    else if (type.salary.to > acc.salary.to) return type;
  }, null);
  return !typeWithMaxSalary ? null : { from: typeWithMaxSalary.salary.from, to: typeWithMaxSalary.salary.to };
};
