<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';
const isCollapsed = ref(true);
</script>

<template>
  <div class="collapsible" @click="isCollapsed = !isCollapsed">
    <div class="collapsible__header">
      <p class="collapsible__title">
        <slot name="title"></slot>
      </p>
      <div class="collapsible__icon" :data-is-collapsed="isCollapsed">
        <ChevronDownIcon class="icon md" />
      </div>
    </div>
    <div class="collapsible__content" :data-is-collapsed="isCollapsed" @click.stop>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.collapsible {
  cursor: pointer;
  width: 100%;
  height: auto;
  border-bottom: 0.5px solid $secondary;
}
.collapsible__header {
  padding: 1rem;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $light;
}
.collapsible__title {
  font-size: 1.2rem;
}
.collapsible__icon {
  transition: 300ms;
  height: 1.5rem;
  &[data-is-collapsed='false'] {
    transform: rotate(180deg);
  }
}
.collapsible__content {
  cursor: auto;
  padding: 0 1rem 1rem 1rem;
  &[data-is-collapsed='true'] {
    display: none;
  }
}
</style>
