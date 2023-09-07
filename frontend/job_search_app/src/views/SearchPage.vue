<script setup lang="ts">
import OffersFilters from '@components/filters/OffersFilters.vue';
import SortingBar from '@components/sorting_bar/SortingBar.vue';
import JobOffers from '@components/job_offers/JobOffers.vue';
</script>

<template>
  <main class="search_page">
    <OffersFilters />
    <SortingBar />
    <JobOffers />
  </main>
</template>

<style lang="scss">
.search_page {
  display: grid;
  width: 100%;
  height: 100vh;
  background-color: $primary;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'filters sorting-bar'
    'filters offers';
}
@media (orientation: portrait) {
  .search_page {
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas:
      'sorting-bar'
      'filters'
      'offers';
  }
}
</style>
