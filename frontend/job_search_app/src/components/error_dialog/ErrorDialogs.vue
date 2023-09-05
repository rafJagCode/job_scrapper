<script setup lang="ts">
import ErrorDialog from './ErrorDialog.vue';
import useErrorDialog from './composables/useErrorDialog.ts';

const { errors } = useErrorDialog();
</script>

<template>
  <div class="error_dialogs">
    <TransitionGroup name="list">
      <ErrorDialog v-for="error in errors" :key="error.id" :error="error" />
    </TransitionGroup>
  </div>
</template>

<style lang="scss">
.error_dialogs {
  position: fixed;
  bottom: 30vh;
  height: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  z-index: 1;
}
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.3s linear;
}
.list-enter-from {
  transform: translateY(50vh);
}
.list-enter-to {
  transform: translateY(0);
}
.list-leave-to {
  opacity: 0;
}
.list-leave-active {
  position: absolute;
}
</style>
