<script setup lang="ts">
import useErrorDialog from './composables/useErrorDialog';
import { ApiError } from '@my_types/ApiError';

const { hideError } = useErrorDialog();

const _props = defineProps<{
  error: ApiError;
}>();
</script>

<template>
  <div class="error_dialog">
    <p class="error_dialog__text">{{ error.message }}</p>
    <button class="error_dialog__button" @click="hideError(error)">OK</button>
  </div>
</template>

<style lang="scss">
.error_dialog {
  padding: 1rem 2rem;
  background-color: $high;
  border-radius: 0.5rem;
  display: grid;
  flex-grow: 0;
  width: fit-content;
}
.error_dialog__text {
  color: $light-grey;
  margin-bottom: 0.5rem;
}
.error_dialog__button {
  cursor: pointer;
  color: $light;
  justify-self: center;
}
</style>
