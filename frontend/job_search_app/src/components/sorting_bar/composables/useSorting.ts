import { Offer } from '@my_types/Offer';
import { ref, Ref } from 'vue';

const sortBy = ref<string | null>(null);

const useSorting = () => {
  const sort = (offers: Ref<Offer[]>) => {
    if (sortBy.value === 'newest') return sortByPublicationData(offers);
    else if (sortBy.value === 'bestSalary') return sortBySalary(offers);
    else return offers.value;
  };
  return { sortBy, sort };
};

const sortByPublicationData = (offers: Ref<Offer[]>) => [...offers.value].sort((offer1, offer2) => Number(new Date(offer2.published)) - Number(new Date(offer1.published)));

const sortBySalary = (offers: Ref<Offer[]>) =>
  [...offers.value].sort((offer1, offer2) => {
    if (!offer1.salary && !offer2.salary) return 0;
    if (!offer1.salary) return 1;
    if (!offer2.salary) return -1;
    return Number(offer2.salary.to) - Number(offer1.salary.to);
  });

export default useSorting;
