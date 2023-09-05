<script setup lang="ts">
import JobOffer from './JobOffer.vue';
import OffersLoader from '@/components/loaders/OffersLoader.vue';
import OffersService from '@services/OffersService';
import useFilters from '@/components/filters/composables/useFilters';
import getFilteredOffers from '@utils/getFilteredOffers';
import useLazyOffersRender from './composables/useLazyOffersRender.ts';
import { Offer } from '@my_types/Offer';
import { ref, onMounted, computed } from 'vue';

const { filters } = useFilters();
const offers = ref<Offer[] | null>(null);

const filteredOffers = computed(() => {
  return getFilteredOffers(offers.value, filters);
});

const { offersToRender } = useLazyOffersRender(filteredOffers);

onMounted(async () => {
  offers.value = (await new OffersService().getAllOffers()).data.value;
});
</script>

<template>
  <div class="job_offers">
    <OffersLoader v-if="!offers" />
    <JobOffer v-for="offer in offersToRender" :key="offer.id" :offer="offer" />
    <div id="end"></div>
  </div>
</template>

<style lang="scss">
.job_offers {
  width: calc(100vw - $filters-width - 2 * $filters-margin - 2rem);
  margin: 0 1rem 0 auto;
}
</style>
