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
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: $primary;
  overflow: auto;
}
</style>
