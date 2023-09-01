<script setup lang="ts">
import Slider from './Slider.vue';
import Checkbox from './Checkbox.vue';
import Collapsible from './Collapsible.vue';
import List from './List.vue';
import { HomeIcon, BuildingOfficeIcon, ScaleIcon } from '@heroicons/vue/24/outline';
// import Offer from '@my_types/Offer';

const props = defineProps<{
  //   offers: Offer[];
  //   filteredOffers: Offer[];
  skills: string[];
}>();
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
          <Checkbox><HomeIcon class="icon sm" />Remote</Checkbox>
          <Checkbox><BuildingOfficeIcon class="icon sm" />Stationary</Checkbox>
          <Checkbox><ScaleIcon class="icon sm" />Hybrid</Checkbox>
        </div>
      </template>
    </Collapsible>
    <Collapsible>
      <template v-slot:title>Experience Levels</template>
      <template v-slot:content>
        <div class="collapsible__experience_levels">
          <Checkbox>Junior</Checkbox>
          <Checkbox>Mid</Checkbox>
          <Checkbox>Senior</Checkbox>
        </div>
      </template>
    </Collapsible>
    <Collapsible>
      <template v-slot:title>Skills</template>
      <template v-slot:content>
        <List :items="skills" />
      </template>
    </Collapsible>
  </div>
</template>

<style lang="scss">
.filters {
  position: fixed;
  margin: $filters-margin;
  width: $filters-width;
  height: calc(100vh - 2 * $filters-margin);
  border: 0.5px solid $secondary;
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
