<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  size?: string;
  checked?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'xl',
  checked: false,
  disabled: false,
});

const emit = defineEmits(['update:modelValue']);

const sliderClasses = computed(() => {
  return {
    slider: true,
    slider_sm: props.size === 'sm',
    slider_md: props.size === 'md',
    slider_lg: props.size === 'lg',
    slider_xl: props.size === 'xl',
  };
});

const toggleClasses = computed(() => {
  return {
    'se-toggle': true,
    'se-toggle_sm': props.size === 'sm',
    'se-toggle_md': props.size === 'md',
    'se-toggle_lg': props.size === 'lg',
    'se-toggle_xl': props.size === 'xl',
  };
});
</script>

<template>
  <label :class="toggleClasses">
    <input
      :checked="props.checked"
      :disabled="props.disabled"
      type="checkbox"
      @change="emit('update:checked', $event.target.checked)"
    >
    <span :class="sliderClasses"></span>
  </label>
</template>

<style scoped>
.se-toggle {
  @apply relative w-[46px] h-6 rounded-full border border-solid border-semi-gray;
}

.se-toggle_sm {
  @apply w-[34px] h-4;
}
.se-toggle_md {
  @apply w-[46px] h-6;
}
.se-toggle_lg {
  @apply w-16 h-8;
}
.se-toggle_xl {
  @apply w-[70px] h-9;
}

.se-toggle input {
  @apply opacity-0 w-0 h-0;
}

.slider {
  @apply absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-light-gray duration-300 rounded-full
  before:absolute before:content-[''] before:h-5 before:w-5 before:rounded-full before:left-0 before:shadow-toggle
  before:bottom-[1px] before:bg-white before:border before:border-solid before:border-black/[0.04]
  before:duration-300;
}

.slider_sm {
  @apply before:h-[14px] before:w-[14px] before:bottom-0;
}
.slider_md {
  @apply before:h-5 before:w-5;
}
.slider_lg {
  @apply before:h-7 before:w-7;
}
.slider_xl {
  @apply before:h-8 before:w-8;
}

input:checked + .slider {
  @apply bg-green;
}

input:checked + .slider:before {
  @apply translate-x-6;
}

input:checked + .slider_sm:before {
  @apply translate-x-[18px];
}

input:checked + .slider_md:before {
  @apply translate-x-6;
}

input:checked + .slider_lg:before {
  @apply translate-x-[34px];
}

input:checked + .slider_xl:before {
  @apply translate-x-9;
}

input:disabled + .slider {
  @apply cursor-default bg-light-gray before:bg-semi-gray
}
</style>