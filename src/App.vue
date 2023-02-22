<script setup lang="ts">
import SeSelect from '@/components/UI/SeSelect/SeSelect.vue';
import { ref } from 'vue';

const options = ref([
  {id: 1, name: 'Option 1', data: {}},
  {id: 2, name: 'Option 2', data: {}},
  {id: 3, name: 'Option 3', data: {}},
  {id: 4, name: 'Option 4', data: {}},
  {id: 5, name: 'Option 5', data: {}},
  {id: 6, name: 'Option 6', data: {}},
  {id: 7, name: 'Option 7', data: {}},
  {id: 8, name: 'Option 8', data: {}},
]);

const selectedOptions = ref({id: 1, name: 'Option 1', data: {}});

</script>

<template>
  <div class="flex flex-col gap-3 p-6">
    <se-select v-model="selectedOptions" :options="options"/>
  </div>

</template>

<style scoped></style>
