import { Offer } from '../Offer.js';

const extractAllCities = (offers: Offer[]) => {
  const skills = offers.flatMap((offer) => offer.skills);
  return [...new Set(skills)];
};

export default extractAllCities;
