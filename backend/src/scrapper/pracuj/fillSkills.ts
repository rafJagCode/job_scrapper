import { Offer } from '../Offer.js';

const fillSkills = (offers: Offer[], skills: string[]) => {
  offers.forEach((offer) => {
    skills.forEach((skill) => {
      const regexp = new RegExp(`\\b${skill.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'gi');
      if (offer.title.match(regexp)) offer.skills.push(skill);
    });
  });
};

export default fillSkills;
