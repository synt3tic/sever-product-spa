<script setup lang="ts">
import SeToggle from '@/components/UI/SeToggle/SeToggle.vue';
import { ref } from 'vue';

const toggleState = ref(false);

</script>

<template>
  <div class="flex flex-col gap-3 p-6">
    <se-toggle v-model:checked="toggleState" size="xui">Переключатель</se-toggle>
  </div>

</template>

<style scoped></style>
