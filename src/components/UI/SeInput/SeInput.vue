<script setup lang="ts">
import { ref } from 'vue';
import SeButton from '@/components/UI/SeButton/SeButton.vue';

interface Props {
  disabled?: boolean,
  size?: string;
  variation?: string;
  icon?: string;
  placeholder?: string;
  type?: string;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  size: 'md',
  variation: 'default',
  icon: '',
  placeholder: '',
  type: 'text',
});

const inputValue = ref('');

</script>

<template>
  <div class="se-input">
    <input
      v-model="inputValue"
      :type="props.type"
      :placeholder="props.placeholder"
      class="input"
      :disabled="props.disabled"
    />
    <se-button
      v-if="props.icon"
      :icon="props.icon"
      class="z-10"
      size="xs"
      variation="transparent"
      :disabled="props.disabled"
    />
  </div>
</template>

<style scoped>
.se-input {
  @apply flex relative justify-end w-96 p-2 h-10 rounded caret-green;
}

.input {
  @apply absolute w-full h-full top-0 left-0 p-2 border border-dark-gray rounded border-solid
  duration-300 focus:outline-none placeholder:text-dark-gray focus:outline-0 focus:border-green
  focus:shadow-lg focus:shadow-green/20 focus:duration-300 disabled:bg-gray;
}
</style>
