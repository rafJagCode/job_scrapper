<script setup lang="ts">
import useFilters from './composables/useFilters';
import { uuid } from 'vue-uuid';

const id = uuid.v4();
const { filters } = useFilters();
</script>

<template>
  <label class="slider" :for="id">
    <input class="slider__input" type="checkbox" :id="id" value="specified salary" v-model="filters['onlySpecifiedSalary']" />
    <div class="slider__background"></div>
    <div class="slider__ball"></div>
  </label>
</template>

<style lang="scss" scoped>
$slider-width: 3rem;
.slider {
  cursor: pointer;
  position: relative;
  display: block;
  width: $slider-width;
  height: calc($slider-width / 2);
  background-color: transparent;
  border-radius: $slider-width;
  overflow: hidden;
}
.slider__input {
  display: none;
  &:checked ~ .slider__ball {
    transform: translateX(125%);
  }
  &:checked ~ .slider__background {
    background-color: $accept;
  }
}
.slider__ball {
  position: absolute;
  left: 5%;
  top: 10%;
  width: 40%;
  aspect-ratio: 1;
  background-color: $light;
  border-radius: 50%;
  transition: 400ms;
}
.slider__background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: $light-grey;
  z-index: -1;
  transition: 400ms;
}
</style>
