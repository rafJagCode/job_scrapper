<script setup lang="ts"></script>

<template>
  <div class="offers_loader">
    <div class="offers_loader__results">
      <p>Fetching...</p>
    </div>
    <div v-for="n in 10" :key="n" class="offers_loader__placeholder"></div>
  </div>
</template>

<style lang="scss">
.offers_loader {
  width: calc(100vw - $filters-width - 2 * $filters-margin - 3.53rem);
  height: calc(100vh - 4.5rem);
  margin-left: auto;
  margin-right: 2rem;
  overflow: hidden;
  &__placeholder {
    position: relative;
    background-color: $secondary;
    margin: 0 1rem 1rem auto;
    padding: 0.5rem 2rem;
    height: 7.6rem;
    width: 100%;
    border-radius: 1rem;
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
}
.offers_loader__results {
  color: $light;
  font-size: 1.5rem;
  margin: 1rem 0;
}

@keyframes loading {
  to {
    transform: translateX(calc(1000% + 5rem));
  }
}
</style>
