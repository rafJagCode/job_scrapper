<script setup lang="ts">
import JobOffer from '@components/JobOffer.vue';
import OffersService from '@services/OffersService';
import { Offer } from '@my_types/Offer';
import { ref, onMounted } from 'vue';

const offers = ref<Offer[]>();

onMounted(async () => {
  offers.value = await new OffersService().getAllOffers();
});
</script>

<template>
  <main class="search_page">
    <JobOffer v-for="(offer, index) in offers" :key="index" :offer="offer" />
  </main>
</template>

<style lang="scss">
.search_page {
  width: 100%;
  height: 100%;
  background-color: $primary;
  overflow: auto;
}
</style>
