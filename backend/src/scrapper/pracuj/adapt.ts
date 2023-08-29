import { Offer } from '../Offer.js';
import { PracujOffer } from './PracujOffer.js';

export const adapt = (offer: PracujOffer): Offer => {
  const source = 'pracuj';
  const title = offer.jobTitle;
  const cities = adaptCities(offer);
  const work_modes = adaptWorkModes(offer);
  const experience_levels = adaptExperienceLevel(offer);
  const published = offer.lastPublicated;
  const skills = [];
  const salary = adaptSalary(offer);

  return { source, title, cities, work_modes, experience_levels, published, skills, salary };
};

const adaptCities = (offer: PracujOffer): Offer['cities'] => {
  const cities = offer.offers.map((offer) => offer.displayWorkplace).filter((city) => !city.length);
  return cities;
};

const adaptWorkModes = (offer: PracujOffer): Offer['work_modes'] => {
  const work_modes = offer.workModes.reduce((acc, workMode) => {
    if (['Praca zdalna', 'Praca mobilna'].includes(workMode)) return [...acc, 'remote'];
    if (workMode === 'Praca stacjonarna') return [...acc, 'stationary'];
    return [...acc, 'hybrid'];
  }, []);
  return [...new Set(work_modes)];
};

const adaptExperienceLevel = (offer: PracujOffer): Offer['experience_levels'] => {
  const experience_levels = offer.positionLevels.reduce((acc, level) => {
    if (['Praktykant / Stażysta', 'Młodszy specjalista (Junior)', 'Asystent'].includes(level)) return [...acc, 'junior'];
    if (['Starszy specjalista (Senior)', 'Ekspert', 'Kierownik / Koordynator', 'Menedżer', 'Dyrektor', 'Prezes'].includes(level)) return [...acc, 'senior'];
    return [...acc, 'mid'];
  }, []);
  return [...new Set(experience_levels)];
};

const adaptSalary = (offer: PracujOffer): Offer['salary'] => {
  if (!offer.salaryDisplayText.length) return null;
  const multiplier = /godz/g.test(offer.salaryDisplayText) ? 40 : 1;
  const salaryWithoutWhitespaces = offer.salaryDisplayText.replace(/\s/g, '');
  const salaryRange = salaryWithoutWhitespaces.match(/(\d+\s?\d*)–(\d+)/g);
  if (!salaryRange) {
    return {
      from: 0,
      to: Number(salaryWithoutWhitespaces.match(/\d+/)[0]) * multiplier,
    };
  }
  const [from, to] = salaryRange[0].split('–').map(Number);
  return { from: from * multiplier, to: to * multiplier };
};
