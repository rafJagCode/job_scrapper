import { Offer } from '@my_types/Offer';
import { ref, computed, onMounted, onUnmounted, watch, Ref } from 'vue';

const renderBatchSize: number = 10;
const amountOfRenderedOffers = ref<number>(renderBatchSize);

const useLazyOffersRender = (offers: Ref<Offer[]>) => {
  const endObserver = new IntersectionObserver(
    (entries) => {
      if (!entries[0].isIntersecting) return;
      if (amountOfRenderedOffers.value >= offers.value.length) return;
      addOffersToRender(renderBatchSize);
    },
    { rootMargin: '30%' },
  );

  onMounted(() => {
    endObserver.observe(getEndElement() as HTMLElement);
  });
  onUnmounted(() => endObserver.unobserve(getEndElement() as HTMLElement));

  watch(offers, reset);

  const offersToRender = computed(() => {
    return offers.value.slice(0, amountOfRenderedOffers.value);
  });

  return { offersToRender };
};

const reset = () => {
  amountOfRenderedOffers.value = renderBatchSize;
};

const getEndElement = () => {
  return document.getElementById('end');
};

const addOffersToRender = (amount: number) => {
  amountOfRenderedOffers.value += amount;
};

export default useLazyOffersRender;
