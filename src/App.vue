<script setup lang="ts">
import SeSelect from '@/components/UI/SeSelect/SeSelect.vue';
import { ref } from 'vue';

const options = ref([
  {id: 1, name: 'Option 1', data: {}, selected: false},
  {id: 2, name: 'Option 2', data: {}, selected: false},
  {id: 3, name: 'Option 3', data: {}, selected: false},
  {id: 4, name: 'Option 4', data: {}, selected: false},
  {id: 5, name: 'Option 5', data: {}, selected: false},
]);
</script>

<template>
  <div class="flex flex-col gap-3 p-6">
    <se-select v-model:options="options"/>
  </div>

</template>

<style scoped></style>
