import { Offer } from '../Offer.js';

const extractAllCities = (offers: Offer[]) => {
  const cities = offers.flatMap((offer) => offer.cities);
  return [...new Set(cities)];
};

export default extractAllCities;
