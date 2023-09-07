import { Offer } from '@my_types/Offer';
import { ref, computed, onMounted, onUnmounted, watch, Ref } from 'vue';

const RENDER_BATCH_SIZE: number = 30;
const amountOfRenderedOffers = ref<number>(RENDER_BATCH_SIZE);

const useLazyOffersRender = (offers: Ref<Offer[]>) => {
  let endObserver: IntersectionObserver;

  onMounted(() => {
    endObserver = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        if (amountOfRenderedOffers.value >= offers.value.length) return;
        addOffersToRender(RENDER_BATCH_SIZE);
      },
      { root: document.querySelector('.job_offers'), rootMargin: '300px' },
    );
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
  amountOfRenderedOffers.value = RENDER_BATCH_SIZE;
};

const getEndElement = () => {
  return document.getElementById('end');
};

const addOffersToRender = (amount: number) => {
  amountOfRenderedOffers.value += amount;
};

export default useLazyOffersRender;
