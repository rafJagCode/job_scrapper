import { getAllOffers as getAllJustJoinItOffers } from '../justjoinit/getAllOffers.js';
import { getAllOffers as getAllTheprotocolOffers } from '../theprotocol/getAllOffers.js';
import { getAllOffers as getAllPracujOffers } from '../pracuj/getAllOffers.js';
import { adapt as adaptJustJoinItOffer } from '../justjoinit/adapt.js';
import { adapt as adaptTheprotocolOffer } from '../theprotocol/adapt.js';
import { adapt as adaptPracujOffer } from '../pracuj/adapt.js';
import getAllSkills from '../formatting_skills/getAllSkills.js';
import getSimplifiedSkillsMap from '../formatting_skills/getSimplifiedSkillsMap.js';
import getAllSimplifiedSkills from '../formatting_skills/getAllSimplifiedSkills.js';
import fillSkills from '../pracuj/fillSkills.js';
import simplifySkills from '../formatting_skills/simplifySkills.js';
import { Offer } from '../Offer.js';

const getFormatedOffers = async (): Promise<Offer[]> => {
  console.log('Getting offers from justJoinIt...');
  const justJoinItOffers = (await getAllJustJoinItOffers()).map(adaptJustJoinItOffer);
  console.log('Getting offers from theprotocol...');
  const theprotocolOffers = (await getAllTheprotocolOffers()).map(adaptTheprotocolOffer);
  console.log('Getting offers from  pracuj...');
  const pracujOffers = (await getAllPracujOffers()).map(adaptPracujOffer);
  console.log('Getting offers completed');

  const allSkills = getAllSkills([...justJoinItOffers, ...theprotocolOffers]);
  const simplifiedSkillsMap = getSimplifiedSkillsMap(allSkills);
  const allSimplifiedSkills = getAllSimplifiedSkills(simplifiedSkillsMap);

  console.log('Filling skills in pracuj offers...');
  fillSkills(pracujOffers, allSimplifiedSkills);
  console.log('Simplifing skills...');
  simplifySkills(justJoinItOffers, simplifiedSkillsMap);
  simplifySkills(theprotocolOffers, simplifiedSkillsMap);

  return [...justJoinItOffers, ...theprotocolOffers, ...pracujOffers];
};

export default getFormatedOffers;
