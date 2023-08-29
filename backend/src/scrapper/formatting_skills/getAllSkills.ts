import { Offer } from '../Offer.js';

const getAllSkills = (offers: Offer[]) => {
  const skills: string[] = [];
  offers.forEach((offer) => {
    offer.skills.forEach((technology) => {
      if (!skills.includes(technology)) skills.push(technology);
    });
  });
  return skills;
};

export default getAllSkills;
