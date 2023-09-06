<script setup lang="ts">
import { uuid } from 'vue-uuid';
import useFilters from './composables/useFilters';
import { Filters } from '@my_types/Filters';

const _props = defineProps<{
  type: keyof Filters;
  value: string;
}>();

const id = uuid.v4();

const { filters } = useFilters();
</script>

<template>
  <label class="checkbox" :for="id">
    <input class="checkbox__input" type="checkbox" :id="id" :value="value" v-model="filters[type]" />
    <div class="checkbox__background"></div>
    <div class="checkbox__text">
      <slot></slot>
    </div>
  </label>
</template>

<style lang="scss" scoped>
.checkbox {
  cursor: pointer;
  position: relative;
  display: block;
  width: fit-content;
  padding: 0.25rem 0.75rem;
  background-color: transparent;
  border-radius: 10rem;
  &:hover .checkbox__background {
    border-color: $accept;
  }
  &:hover .checkbox__text {
    color: $accept;
  }
}
.checkbox__background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 0.5px solid $light-grey;
  border-radius: 10rem;
  transition: 100ms;
}
.checkbox__text {
  user-select: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: $light-grey;
  transition: 100ms;
}
.checkbox__input {
  display: none;
  &:checked ~ .checkbox__background {
    background-color: $accept-alpha;
    border-color: $accept;
  }
  &:checked ~ .checkbox__text {
    color: $accept;
  }
}
</style>
