<script setup lang="ts">
import SeSvg from '@/components/UI/SeSvg/SeSvg.vue';
import { computed } from 'vue';

const emit = defineEmits(['clickOnButton']);

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
    'se-button_transparent': props.variation === 'transparent',
    'se-button_active': props.active,
    'se-button_sm': props.size === 'sm',
    'se-button_md': props.size === 'md',
    'se-button_lg': props.size === 'lg',
    'se-button_xs': props.size === 'xs',
  };
});
</script>

<template>
  <button
    :class="classList"
    :disabled="props.disabled"
    @click="emit('clickOnButton')"
  >
    <se-svg v-if="icon" :name="icon" class="svg-icon"/>
      <slot />
  </button>
</template>

<style>
.se-button {
  @apply flex justify-center items-center p-2 gap-2 bg-transparent border border-solid border-green rounded
  text-green duration-300 hover:duration-300 hover:bg-green hover:text-white disabled:bg-gray disabled:text-dark-gray
  disabled:border-none active:text-sm active:duration-300;
}

.se-button:hover .svg-icon path {
  @apply fill-green duration-300;
}

.se-button:disabled:hover .svg-icon path {
  @apply fill-dark-gray duration-300;
}

.se-button_secondary {
  @apply justify-start gap-7 bg-green text-white border border-solid border-green duration-300 hover:bg-white hover:text-green active:text-sm;
}

.se-button_secondary .svg-icon path {
  @apply fill-white duration-300;
}

.se-button_transparent {
  @apply border-none bg-none hover:bg-transparent;
}

.se-button_transparent:focus .svg-icon path {
  @apply duration-300;
}

.se-button_transparent .svg-icon path {
  @apply duration-300;
}

.se-button_xs {
  @apply p-0 gap-0;
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
