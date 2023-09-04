<script setup lang="ts">
import { WorkMode } from '@/types/Offer';
import { HomeIcon, BuildingOfficeIcon, ScaleIcon } from '@heroicons/vue/24/outline';

const _props = defineProps<{
  workMode: WorkMode;
}>();
</script>

<template>
  <div class="work_mode">
    <HomeIcon class="icon md" v-if="workMode === 'remote'" />
    <BuildingOfficeIcon class="icon md" v-else-if="workMode === 'stationary'" />
    <ScaleIcon class="icon md" v-else />
    {{ workMode }}
  </div>
</template>

<style lang="scss">
.work_mode {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
</style>
