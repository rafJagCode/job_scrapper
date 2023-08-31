<script setup lang="ts">
const props = defineProps<{
  skill: string;
}>();
</script>

<template>
  <div class="skill">{{ skill }}</div>
</template>

<style lang="scss">
.skill {
  display: flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  background-color: $dark;
  border: 1px solid $accent;
  color: $accent;
  border-radius: 16px;
  width: fit-content;
  font-size: 0.8rem;
}
</style>
