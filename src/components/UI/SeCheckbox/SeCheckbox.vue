<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  size?: string;
  checked?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  checked: false,
});

const emit = defineEmits(['update:modelValue']);

const checkboxClasses = computed(() => {
  return {
    'se-checkbox': true,
    'se-checkbox_sm': props.size === 'sm',
    'se-checkbox_md': props.size === 'md',
    'se-checkbox_lg': props.size === 'lg',
    'se-checkbox_xl': props.size === 'xl',
  };
});

const checkmarkClasses = computed(() => {
  return {
    checkmark: true,
    checkmark_sm: props.size === 'sm',
    checkmark_md: props.size === 'md',
    checkmark_lg: props.size === 'lg',
    checkmark_xl: props.size === 'xl',
  };
});
</script>

<template>
  <label :class="checkboxClasses">
    <slot />
    <input
      type="checkbox"
      :checked="props.checked"
      @change="emit('update:checked', $event.target.checked)"
    >
    <span :class="checkmarkClasses" />
  </label>
</template>

<style scoped>
.se-checkbox {
  @apply block relative cursor-pointer select-none;
}

.se-checkbox_sm{
  @apply pl-5 text-xs;
}

.se-checkbox_md{
  @apply pl-6 text-sm;
}

.se-checkbox_lg{
  @apply pl-7 text-base;
}

.se-checkbox_xl{
  @apply pl-9 text-2xl;
}

.se-checkbox input {
  @apply absolute opacity-0 cursor-pointer h-0 w-0;
}

.checkmark {
  @apply absolute top-0 left-0 rounded bg-white border border-solid border-dark-gray duration-300
  after:absolute after:hidden after:content-[''] after:left-2 after:top-1 after:w-1.5 after:h-3
  after:border after:border-solid after:border-white after:border-t-0 after:border-r after:border-b
  after:border-l-0 after:rotate-45;
}

.checkmark_sm {
  @apply w-4 h-4 after:left-[5px] after:top-[2px] after:w-1 after:h-2;
}

.checkmark_md {
  @apply w-5 h-5 after:left-[6.5px] after:top-[1.1px] after:w-1.5 after:h-3;
}

.checkmark_lg {
  @apply w-6 h-6;
}

.checkmark_xl {
  @apply w-8 h-8 after:left-3 after:top-1 after:w-2 after:h-4;
}

.se-checkbox input:checked ~ .checkmark {
  @apply bg-green border-green;
}

.se-checkbox input:checked ~ .checkmark:after {
  @apply block;
}
</style>