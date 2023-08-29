import axios from 'axios';
import { JustJoinItOffer } from './JustJoinItOffer.js';

export const getAllOffers = async () => {
  const { data: offers }: { data: JustJoinItOffer[] } = await axios.get('https://justjoin.it/api/offers');
  return offers;
};
