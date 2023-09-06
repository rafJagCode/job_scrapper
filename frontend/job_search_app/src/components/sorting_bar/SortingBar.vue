<script setup lang="ts">
import CollapsibleContainer from '@components/filters/CollapsibleContainer.vue';
import CheckBox from '@components/filters/CheckBox.vue';
import useFilters from '@components/filters/composables/useFilters';
import useSorting from './composables/useSorting';

const { filters } = useFilters();
const { sortBy } = useSorting();
</script>

<template>
  <div class="sorting_bar">
    <label class="sorting_bar__input_label">
      <input class="sorting_bar__input" type="radio" value="newest" v-model="sortBy" @click="sortBy === 'newest' && (sortBy = null)" />
      <div class="sorting_bar__content">Newest</div>
    </label>
    <label class="sorting_bar__input_label">
      <input class="sorting_bar__input" type="radio" value="bestSalary" v-model="sortBy" @click="sortBy === 'bestSalary' && (sortBy = null)" />
      <div class="sorting_bar__content">Best Salary</div>
    </label>
    <CollapsibleContainer id="sorting_bar__active_filters" v-if="Object.values(filters).some((filter) => filter.length > 0)">
      <template v-slot:title>Active Filters</template>
      <template v-slot:content>
        <div class="sorting_bar__active_filters_container">
          <CheckBox :type="'onlySpecifiedSalary'" v-if="filters.onlySpecifiedSalary.length > 0" :value="'specified salary'" :key="'onlySpecifiedSalary'">specified salary</CheckBox>
          <CheckBox :type="'workModes'" v-for="workMode in filters.workModes" :value="workMode" :key="workMode">{{ workMode }}</CheckBox>
          <CheckBox :type="'experienceLevels'" v-for="experienceLevel in filters.experienceLevels" :value="experienceLevel" :key="experienceLevel">{{ experienceLevel }}</CheckBox>
          <CheckBox :type="'skills'" v-for="skill in filters.skills" :value="skill" :key="skill">{{ skill }}</CheckBox>
          <CheckBox :type="'cities'" v-for="city in filters.cities" :value="city" :key="city">{{ city }}</CheckBox>
        </div>
      </template>
    </CollapsibleContainer>
  </div>
</template>

<style lang="scss">
.sorting_bar {
  width: calc(100vw - $filters-width - 2 * $filters-margin - 1rem);
  min-height: 3.5rem;
  margin-left: calc($filters-width + 2 * $filters-margin);
  margin-top: 1rem;
  border: 1px solid $secondary-light;
  background-color: $primary;
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
}
.sorting_bar__input_label {
  cursor: pointer;
  border-radius: 10rem;
  margin: 0 0.5rem;
  &:hover .sorting_bar__content {
    border-color: $accept;
    color: $accept;
  }
}
.sorting_bar__input {
  display: none;
  &:checked ~ .sorting_bar__content {
    background-color: $accept-alpha;
    border-color: $accept;
    color: $accept;
  }
}
.sorting_bar__content {
  color: $light-grey;
  border: 0.5px solid $light-grey;
  border-radius: 10rem;
  padding: 0.25rem 0.75rem;
  font-size: 1rem;
}
#sorting_bar__active_filters {
  width: 50%;
  margin-left: auto;
  border: none;
  border-left: 1px solid $secondary-light;
}
.sorting_bar__active_filters_container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
