<script setup lang="ts">
import { WorkMode } from '@/types/Offer';
import { HomeIcon, BuildingOfficeIcon, ScaleIcon } from '@heroicons/vue/24/outline';
const props = defineProps<{
  work_mode: WorkMode;
}>();
</script>

<template>
  <div class="work_mode">
    <HomeIcon class="icon md" v-if="work_mode === 'remote'" />
    <BuildingOfficeIcon class="icon md" v-else-if="work_mode === 'stationary'" />
    <ScaleIcon class="icon md" v-else />
    {{ work_mode }}
  </div>
</template>

<style lang="scss">
.work_mode {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
</style>
