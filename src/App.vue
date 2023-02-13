<script setup lang="ts">
import SeInput from '@/components/UI/SeInput/SeInput.vue';
import { ref } from 'vue';

const xui = ref('');
</script>

<template>
  <div class="p-6">
    <se-input v-model="xui" icon="search"/>
  </div>

</template>

<style scoped></style>
