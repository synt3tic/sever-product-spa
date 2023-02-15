<script setup lang="ts">
import SeCheckbox from '@/components/UI/SeCheckbox/SeCheckbox.vue';
import { ref } from 'vue';

const check = ref(false);

</script>

<template>
  <div class="p-6">
    <se-checkbox v-model:checked="check">ONE</se-checkbox>
  </div>
</template>

<style scoped></style>
