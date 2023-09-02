<script setup lang="ts">
import { HomeIcon, BuildingOfficeIcon, ScaleIcon } from '@heroicons/vue/24/outline';
import Slider from './Slider.vue';
import Checkbox from './Checkbox.vue';
import Collapsible from './Collapsible.vue';
import List from './List.vue';
import useFilters from './composables/useFilters';
import OffersService from '@/services/OffersService';
import { ref, watch, onMounted } from 'vue';

const { filters } = useFilters();

const skills = ref([]);
const cities = ref([]);

watch(filters, (value) => {
  console.log(value);
});

onMounted(async () => {
  const offersService = new OffersService();
  skills.value = await offersService.getAllSkills();
  cities.value = await offersService.getAllCities();
});
</script>

<template>
  <div class="filters">
    <div class="filters__salary">
      <p class="filters__salary_text">Only with specified salary</p>
      <Slider />
    </div>
    <Collapsible>
      <template v-slot:title>Work Modes</template>
      <template v-slot:content>
        <div class="collapsible__work_modes">
          <Checkbox :type="'workMode'" :value="'remote'" @checkbox="console.log('test')"><HomeIcon class="icon sm" />Remote</Checkbox>
          <Checkbox :type="'workMode'" :value="'stationary'"><BuildingOfficeIcon class="icon sm" />Stationary</Checkbox>
          <Checkbox :type="'workMode'" :value="'hybrid'"><ScaleIcon class="icon sm" />Hybrid</Checkbox>
        </div>
      </template>
    </Collapsible>
    <Collapsible>
      <template v-slot:title>Experience Levels</template>
      <template v-slot:content>
        <div class="collapsible__experience_levels">
          <Checkbox :type="'experiencLevel'" :value="'junior'">Junior</Checkbox>
          <Checkbox :type="'experiencLevel'" :value="'mid'">Mid</Checkbox>
          <Checkbox :type="'experiencLevel'" :value="'senior'">Senior</Checkbox>
        </div>
      </template>
    </Collapsible>
    <Collapsible>
      <template v-slot:title>Skills</template>
      <template v-slot:content>
        <List :items="skills" :type="'skill'" />
      </template>
    </Collapsible>
    <Collapsible>
      <template v-slot:title>Cities</template>
      <template v-slot:content>
        <List :items="cities" :type="'city'" />
      </template>
    </Collapsible>
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
