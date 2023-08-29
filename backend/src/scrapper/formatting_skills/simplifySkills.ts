import { Offer } from '../Offer.js';

const simplifySkills = (offers: Offer[], simplifiedSkillsMap: Map<string, string[]>): void => {
  offers.forEach((offer) => {
    const simplifiedSkills = Array.from(new Set(offer.skills.flatMap((skill) => simplifiedSkillsMap.get(skill))));
    offer.skills = simplifiedSkills;
  });
};

export default simplifySkills;
