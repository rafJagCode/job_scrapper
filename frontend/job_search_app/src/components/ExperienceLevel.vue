<script setup lang="ts">
import { ExperienceLevel } from '@/types/Offer';

const props = defineProps<{
  experience_level: ExperienceLevel;
}>();
</script>

<template>
  <div class="experience_level" :data-experience-level="experience_level">{{ experience_level.toUpperCase() }}</div>
</template>

<style lang="scss">
.experience_level {
  font-size: 1.2rem;
  &[data-experience-level='junior'] {
    color: $low;
  }
  &[data-experience-level='mid'] {
    color: $medium;
  }
  &[data-experience-level='senior'] {
    color: $high;
  }
}
</style>
