<script setup lang="ts">
import SeSvg from '@/components/UI/SeSvg/SeSvg.vue';
import { computed } from 'vue';

const emit = defineEmits(['click']);

interface Props {
  active?: boolean;
  disabled?: boolean;
  size?: string;
  variation?: string;
  icon?: string;
}

const props = withDefaults(defineProps<Props>(), {
  active: false,
  disabled: false,
  size: 'lg',
  variation: 'default',
  icon: '',
});

const classList = computed(() => {
  return  {
    'se-button': true,
    'se-button_secondary': props.variation === 'secondary',
    'se-button_active': props.active,
    'se-button_sm': props.size === 'sm',
    'se-button_md': props.size === 'md',
    'se-button_lg': props.size === 'lg',
  };
});
</script>

<template>
  <button
    :class="classList"
    :disabled="props.disabled"
    @click="emit('click')"
  >
    <se-svg v-if="icon" :name="icon" class="svg-icon"/>
    <span class="se-button__text">
      <slot />
    </span>
  </button>
</template>

<style>
.se-button {
  @apply flex justify-center items-center h-10 p-2 gap-2 bg-white border border-solid border-green rounded
  text-green duration-300 hover:duration-300 hover:bg-green hover:text-white disabled:bg-gray disabled:text-dark-gray
  disabled:border-none active:text-sm active:duration-300;
}

.se-button__text {
  @apply w-24;
}

.se-button_secondary {
  @apply bg-green text-white hover:bg-white hover:text-green active:text-sm;
}

.se-button_secondary .svg-icon path {
  @apply fill-white duration-300;
}

.se-button:hover .svg-icon path {
  @apply fill-green duration-300;
}

.se-button_sm {
  @apply w-24;
}

.se-button_md {
  @apply w-36;
}

.se-button_lg {
  @apply w-64;
}

.se-button_active {
  @apply bg-orange border-orange text-white hover:bg-orange hover:cursor-default;
}
</style>
