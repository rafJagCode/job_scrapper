import { Offer } from '@my_types/Offer';
import { Filters } from '@my_types/Filters';

const getFilteredOffers = (offers: Offer[] | null, filters: Filters) => {
  if (!offers) return [];
  const filtersToApply = getFiltersToApply(filters);
  return offers.filter((offer) => filtersToApply.every((filter) => filter(offer)));
};

const getFiltersToApply = (filters: Filters) => {
  const filtersToApply: ((_offer: Offer) => boolean)[] = [];
  if (filters.onlySpecifiedSalary.length > 0) filtersToApply.push(hasSpecifiedSalary);
  if (filters.workModes.length > 0) filtersToApply.push(hasEvery(filters, 'workModes'));
  if (filters.experienceLevels.length > 0) filtersToApply.push(hasEvery(filters, 'experienceLevels'));
  if (filters.skills.length > 0) filtersToApply.push(hasEvery(filters, 'skills'));
  if (filters.cities.length > 0) filtersToApply.push(hasEvery(filters, 'cities'));
  return filtersToApply;
};

const hasSpecifiedSalary = (offer: Offer) => Boolean(offer.salary);

const hasEvery = (filters: Filters, filterName: Exclude<keyof Filters, 'onlySpecifiedSalary'>) => (offer: Offer) => {
  const chosenFiltersValues = filters[filterName];
  const offerValues = new Set([...offer[filterName]]);

  for (const value of chosenFiltersValues) {
    if (!offerValues.has(value)) return false;
  }

  return true;
};

export default getFilteredOffers;
