<script setup lang="ts">
import JobOffer from './JobOffer.vue';
import OffersLoader from '@/components/loaders/OffersLoader.vue';
import OffersService from '@services/OffersService';
import useFilters from '@/components/filters/composables/useFilters';
import useSorting from '@/components/sorting_bar/composables/useSorting';
import getFilteredOffers from '@utils/getFilteredOffers';
import useLazyOffersRender from './composables/useLazyOffersRender.ts';
import { Offer } from '@my_types/Offer';
import { ref, onMounted, computed } from 'vue';

const { filters } = useFilters();
const { sort } = useSorting();
const offers = ref<Offer[] | null>(null);

const filteredOffers = computed(() => getFilteredOffers(offers.value, filters));

const sortedOffers = computed(() => sort(filteredOffers));

const { offersToRender } = useLazyOffersRender(sortedOffers);

onMounted(async () => {
  offers.value = (await new OffersService().getAllOffers()).data.value;
});
</script>

<template>
  <div class="job_offers">
    <OffersLoader v-if="!offers" />
    <template v-else>
      <div class="job_offers__results">
        <p>Found</p>
        <p>({{ filteredOffers.length }} offers)</p>
      </div>
      <JobOffer v-for="offer in offersToRender" :key="offer.id" :offer="offer" />
    </template>
    <div id="end"></div>
  </div>
</template>

<style lang="scss">
.job_offers {
  grid-area: offers;
  overflow-y: scroll;
  padding-right: 1rem;
}
.job_offers__results {
  display: flex;
  gap: 0.5rem;
  color: $light;
  font-size: 1.5rem;
  margin: 1rem 0;
  & p:last-child {
    color: $dark-grey;
  }
}
@media (orientation: portrait) {
  .job_offers {
    padding-left: 1rem;
  }
}
</style>
