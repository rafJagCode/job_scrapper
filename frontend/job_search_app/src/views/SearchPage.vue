<script setup lang="ts">
import JobOffer from '@components/job_offer/JobOffer.vue';
import Filters from '@components/filters/Filters.vue';
import OffersService from '@services/OffersService';
import { Offer } from '@my_types/Offer';
import { ref, onMounted } from 'vue';

const offers = ref<Offer[]>([]);
const skills = ref<string[]>([]);

onMounted(async () => {
  const offersService = new OffersService();
  offers.value = await offersService.getAllOffers();
  skills.value = await offersService.getAllSkills();
});
</script>

<template>
  <main class="search_page">
    <Filters :skills="skills" />
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
