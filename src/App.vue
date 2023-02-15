<script setup lang="ts">
import SeRadioButton from '@/components/UI/SeRadioButton/SeRadioButton.vue';
import { ref } from 'vue';

const contacts = ref([
  {
    id: 1,
    value: 'phone',
    name: 'Phone',
    checked: false,
  },
  {
    id: 2,
    value: 'email',
    name: 'E-mail',
    checked: false,
  },
  {
    id: 3,
    value: 'mail',
    name: 'Mail',
    checked: false,
  },
]);

</script>

<template>
  <div class="flex flex-col gap-3 p-6">
    <se-radio-button
      v-for="radio in contacts"
      :key="radio.id"
      :value="radio.value"
      v-model:checked="radio.checked"
    >
      {{ radio.name }}
    </se-radio-button>
  </div>

</template>

<style scoped></style>
