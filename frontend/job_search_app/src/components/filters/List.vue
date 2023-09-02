<script setup lang="ts">
import CheckBox from './CheckBox.vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import { ref, computed } from 'vue';

const search = ref('');
const isSearchFocused = ref(false);

const filteredItems = computed(() => {
  if (!search.value.length) return props.items;
  const regexp = new RegExp(`${search.value}`, 'gi');
  return props.items.filter((item) => item.match(regexp));
});

const props = defineProps<{
  type: string;
  items: string[] | undefined;
}>();
</script>

<template>
  <div class="list">
    <div class="list__search">
      <input type="text" class="list__search_input" v-model="search" @focus="isSearchFocused = true" @blur="isSearchFocused = false" />
      <MagnifyingGlassIcon class="list__search_icon icon md" />
      <p class="list__search_placeholder" :data-transformed="isSearchFocused || search.length > 0">Search</p>
    </div>
    <ul class="list__items">
      <li v-for="item in filteredItems" :key="item">
        <CheckBox :type="type" :value="item">{{ item }}</CheckBox>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.list {
  width: 100%;
  height: auto;
  margin: 1rem 0;
}
.list__search {
  position: relative;
  display: flex;
  width: 100%;
  height: 3rem;
  box-shadow: 0 0 0 1px $dark-grey;
  transition: 100ms;
  margin-bottom: 1rem;
  &:focus-within {
    box-shadow: 0 0 0 3px $secondary-light;
    & .list__search_placeholder {
      color: $secondary-light;
    }
  }
}
.list__search_input {
  background: transparent;
  border: none;
  height: 100%;
  flex-grow: 1;
  color: $light;
  font-size: 1.1rem;
  margin-left: 1rem;
  outline: none;
}
.list__search_icon {
  color: $secondary-light;
  margin: 0.75rem 1rem;
}
.list__search_placeholder {
  position: absolute;
  left: 0.5rem;
  padding: 0 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background-color: $primary;
  font-size: 1.1rem;
  color: $light;
  transition: 100ms;
  &[data-transformed='true'] {
    transform: translateY(-170%) scale(0.8);
  }
}
.list__items {
  height: 10rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  overflow-y: scroll;
}
</style>
