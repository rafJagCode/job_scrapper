<script setup lang="ts">
import { HomeIcon, BuildingOfficeIcon, ScaleIcon } from '@heroicons/vue/24/outline';
import SalarySlider from './SalarySlider.vue';
import CheckBox from './CheckBox.vue';
import CollapsibleContainer from './CollapsibleContainer.vue';
import SearchableList from './SearchableList.vue';
import FilterLoader from '@/components/loaders/FilterLoader.vue';
import OffersService from '@/services/OffersService';
import { ref, onMounted } from 'vue';

const skills = ref<null | string[]>(null);
const cities = ref<null | string[]>(null);

onMounted(async () => {
  const offersService = new OffersService();
  skills.value = (await offersService.getAllSkills()).data.value;
  cities.value = (await offersService.getAllCities()).data.value;
});
</script>

<template>
  <div class="filters">
    <div class="filters__salary">
      <p class="filters__salary_text">Only with specified salary</p>
      <SalarySlider />
    </div>
    <CollapsibleContainer>
      <template v-slot:title>Work Modes</template>
      <template v-slot:content>
        <div class="collapsible__work_modes">
          <CheckBox :type="'workModes'" :value="'remote'"><HomeIcon class="icon sm" />Remote</CheckBox>
          <CheckBox :type="'workModes'" :value="'stationary'"><BuildingOfficeIcon class="icon sm" />Stationary</CheckBox>
          <CheckBox :type="'workModes'" :value="'hybrid'"><ScaleIcon class="icon sm" />Hybrid</CheckBox>
        </div>
      </template>
    </CollapsibleContainer>
    <CollapsibleContainer>
      <template v-slot:title>Experience Levels</template>
      <template v-slot:content>
        <div class="collapsible__experience_levels">
          <CheckBox :type="'experienceLevels'" :value="'junior'">Junior</CheckBox>
          <CheckBox :type="'experienceLevels'" :value="'mid'">Mid</CheckBox>
          <CheckBox :type="'experienceLevels'" :value="'senior'">Senior</CheckBox>
        </div>
      </template>
    </CollapsibleContainer>
    <FilterLoader v-if="!skills" :text="'Skills'" />
    <CollapsibleContainer v-else>
      <template v-slot:title>Skills</template>
      <template v-slot:content>
        <SearchableList :items="skills" :type="'skills'" />
      </template>
    </CollapsibleContainer>
    <FilterLoader v-if="!cities" :text="'Cities'" />
    <CollapsibleContainer v-else>
      <template v-slot:title>Cities</template>
      <template v-slot:content>
        <SearchableList :items="cities" :type="'cities'" />
      </template>
    </CollapsibleContainer>
  </div>
</template>

<style lang="scss">
.filters {
  position: fixed;
  margin: $filters-margin;
  width: $filters-width;
  height: auto;
  max-height: calc(100vh - 2 * $filters-margin);
  border: 0.5px solid $secondary;
  border-bottom: none;
  overflow-y: auto;
  user-select: none;
}
.filters__salary {
  height: 3.5rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  color: $light;
  border-bottom: 0.5px solid $secondary;
}
.collapsible__work_modes {
  display: flex;
  gap: 0.5rem;
}
.collapsible__experience_levels {
  display: flex;
  gap: 0.5rem;
}
</style>
