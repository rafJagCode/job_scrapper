import { Offer } from '@my_types/Offer';
import { Filters } from '@my_types/Filters';

const getFilteredOffers = (offers: Offer[] | null, filters: Filters) => {
  if (!offers) return [];
  const filtersToApply = getFiltersToApply(filters);
  return offers.filter((offer) => filtersToApply.every((filter) => filter(offer)));
};

const getFiltersToApply = (filters: Filters) => {
  const filtersToApply: ((_offer: Offer) => boolean)[] = [];
  if (filters.onlySpecifiedSalary) filtersToApply.push(hasSpecifiedSalary);
  if (filters.workModes.length > 0) filtersToApply.push(hasOneOf(filters, 'workModes'));
  if (filters.experienceLevels.length > 0) filtersToApply.push(hasOneOf(filters, 'experienceLevels'));
  if (filters.skills.length > 0) filtersToApply.push(hasOneOf(filters, 'skills'));
  if (filters.cities.length > 0) filtersToApply.push(hasOneOf(filters, 'cities'));
  return filtersToApply;
};

const hasSpecifiedSalary = (offer: Offer) => Boolean(offer.salary);

const hasOneOf = (filters: Filters, filterName: Exclude<keyof Filters, 'onlySpecifiedSalary'>) => (offer: Offer) =>
  offer[filterName].some((value) => {
    const filter: string[] = filters[filterName];
    return filter.includes(value);
  });

export default getFilteredOffers;
