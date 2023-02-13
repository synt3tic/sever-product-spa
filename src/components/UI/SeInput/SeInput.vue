<script setup lang="ts">
import { computed, defineProps } from 'vue';
import SeButton from '@/components/UI/SeButton/SeButton.vue';

interface Props {
  disabled?: boolean;
  size?: string;
  variation?: string;
  icon?: string;
  placeholder?: string;
  type?: string;
  modelValue?: string;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  size: 'md',
  variation: 'default',
  icon: '',
  placeholder: '',
  type: 'text',
  modelValue: '',
});

const emit = defineEmits(['update:modelValue']);

const classList = computed(() => {
  return {
    input: true,
    'input_with-icon': props.icon,
  };
});

</script>

<template>
  <div class="se-input">
    <input
      :value="props.modelValue"
      :type="props.type"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :class="classList"
      @input="emit('update:modelValue', $event.target.value)"
    />
    <se-button
      v-if="props.icon"
      :icon="props.icon"
      :disabled="props.disabled"
      class="button"
      size="xs"
      variation="transparent"
    />
  </div>
</template>

<style scoped>
.se-input {
  @apply relative flex justify-end h-10 rounded caret-green;
}

.input {
  @apply h-full w-full p-2 border border-dark-gray rounded border-solid
  duration-300 focus:outline-none placeholder:text-dark-gray focus:outline-0 focus:border-green
  focus:shadow-lg focus:shadow-green/20 focus:duration-300 disabled:bg-gray;
}

.input_with-icon {
  @apply pr-8
}

.button {
  @apply absolute top-2 right-2
}
</style>
