<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/24/outline';

const _props = defineProps<{
  text: string;
}>();
</script>

<template>
  <div class="filter_loader">
    <p class="filter_loader__text">{{ text }}</p>
    <ChevronDownIcon class="icon md" />
  </div>
</template>

<style lang="scss">
.filter_loader {
  position: relative;
  height: 3.5rem;
  width: 100%;
  border-bottom: 1px solid $secondary;
  color: $light;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(calc(-100% - 5rem));
    height: 100%;
    width: 10%;
    background-color: $secondary-light;
    box-shadow: 0 0 4rem 5rem $secondary-light;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: loading;
    animation-timing-function: linear;
  }
}

@keyframes loading {
  to {
    transform: translateX(calc(1000% + 5rem));
  }
}
</style>
