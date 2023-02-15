<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  size?: string;
  checked?: boolean;
  value?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'xl',
  checked: false,
  value: 'radiobutton',
});

const emit = defineEmits(['update:checked']);

const radioClasses = computed(() => {
  return {
    'se-radio': true,
    'se-radio_sm': true,
    'se-radio_md': props.size === 'md',
    'se-radio_lg': props.size === 'lg',
    'se-radio_xl': props.size === 'xl',
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
  <label :class="radioClasses">
    <slot />
    <input
      :value="props.value"
      :checked="checked"
      type="radio"
      name="radio"
      @change="emit('update:checked', $event.target.checked)"
    >
    <span :class="checkmarkClasses" />
  </label>
</template>

<style scoped>
.se-radio {
  @apply block relative pl-8 cursor-pointer select-none;
}

.se-radio_sm {
  @apply pl-5 text-xs;
}

.se-radio_md {
  @apply pl-6 text-sm;
}

.se-radio_lg {
  @apply pl-7 text-base;
}

.se-radio_xl {
  @apply pl-9 text-2xl;
}

.se-radio input {
  @apply absolute opacity-0 cursor-pointer h-0 w-0;
}

.checkmark {
  @apply absolute top-0 left-0 bg-white border border-solid border-gray rounded-full
  after:content-[''] after:absolute after:hidden;
}

.checkmark_sm {
  @apply w-4 h-4 after:left-[5px] after:top-[2px] after:w-1 after:h-2;
}
.checkmark_md {
  @apply w-5 h-5 after:left-[6.5px] after:top-[2.3px] after:w-[5px] after:h-2.5;
}
.checkmark_lg {
  @apply w-6 h-6 after:left-[8px] after:top-[3px] after:w-1.5 after:h-3;
}
.checkmark_xl {
  @apply w-8 h-8 after:left-[11.5px] after:top-1 after:w-2 after:h-4;
}

.se-radio input ~ .checkmark {
  @apply hover:border hover:border-solid hover:border-dark-green hover:duration-300 checked:duration-300;
}

.se-radio input:checked ~ .checkmark {
  @apply bg-green after:block border-dark-green;
}

.se-radio .checkmark {
  @apply after:border after:border-solid after:border-white after:border-t-0 after:border-r after:border-b
  after:border-l-0 after:rotate-45;
}
</style>