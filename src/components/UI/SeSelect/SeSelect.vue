<script setup lang="ts">
import SeSvg from '@/components/UI/SeSvg/SeSvg.vue';
import { computed, onMounted, ref } from 'vue';
import SeButton from '@/components/UI/SeButton/SeButton.vue';
import SeCheckbox from '@/components/UI/SeCheckbox/SeCheckbox.vue';

interface Option {
  id: number;
  name: string;
  data: object;
}

interface Props {
  options: Option[];
  modelValue: Option[] | [] | Option | {};
  multiple?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => ([]),
  modelValue: () => ([]),
});

const emit = defineEmits(['update:modelValue']);

const setValue = (): {} | [] | Option[] | Option => {
  if (props.multiple) {
    return [];
  } else {
    return {};
  }
};

const value = ref(setValue());

const setInitialValues = () => {
  if (props.multiple) {
    value.value = props.modelValue;
  } else {
    value.value = props.modelValue || {};
  }
};

const placeholder = computed(() => {
  let result;
  if (Object.keys(value.value).length && props.multiple) {
    result = `Выбрано: ${Object.keys(value.value).length}`;
  } else if (Object.keys(value.value).length && !props.multiple) {
    result = value.value.name;
  } else {
    result = 'Выберите..';
  }
  return result;
});

const isShowClearButton = computed(() => {
  return props.multiple && Object.keys(value.value).length;
});

const clear = (event: Event) => {
  if (props.multiple) {
    value.value = [];
    emit('update:modelValue', value.value);
    event.stopPropagation();
  }
};

const isChecked = (option: Option) => {
  if(Array.isArray(value.value)) {
    return !!value.value.find((el) => option.id === el.id);
  }
};

const selectOption = (option: Option) => {
  if (Array.isArray(value.value)) {
    if (!(value.value).find(el => el.id === option.id)) {
      value.value.push(option);
    } else {
      value.value = Object.values(value.value).filter(el => el.id !== option.id);
    }
  } else {
    value.value = option;
    areOptionsOpen.value = !areOptionsOpen.value;
  }
  emit('update:modelValue', value.value);
};

const areOptionsOpen = ref(false);

const selectClasses = computed(() => {
  return {
    'se-select__title': true,
    'se-select__title_opened': areOptionsOpen.value,
  };
});

const iconClass = computed(() => {
  return {
    'se-select__icon': true,
    'se-select__icon_opened': areOptionsOpen.value,
  };
});

onMounted(() => {
  setInitialValues();
});

</script>

<template>
  <div class="se-select">
    <div :class="selectClasses" @click="areOptionsOpen = !areOptionsOpen">
      <p>{{ placeholder }}</p>
      <div class="se-select__tools">
        <se-button
          v-if="isShowClearButton"
          size="xs"
          icon="cross"
          variation="secondary"
          @click="clear"
        />
        <se-svg name="select" :class="iconClass" />
      </div>
    </div>
    <transition name="options">
      <ul v-if="areOptionsOpen" class="se-select__options">
        <li
          v-for="option in options"
          :key="option.id"
          class="se-select__option"
          @click="selectOption(option)"
        >
          <se-checkbox
            v-if="multiple"
            :model-value="isChecked(option)"
            @change="selectOption(option)"
          >{{ option.name }}
          </se-checkbox>
          <p v-else>
            {{ option.name }}
          </p>
        </li>
      </ul>
    </transition>
  </div>
</template>

<style scoped>
.se-select {
  @apply relative flex flex-col items-center bg-white cursor-pointer select-none;
}

.se-select__options {
  @apply absolute bg-white border-r border-b border-l border-solid border-green top-[2.5rem]
  w-full flex flex-col h-[11.25rem] overflow-y-scroll rounded-b;
}

.se-select__title {
  @apply flex justify-between pl-4 p-2 w-full border border-solid border-green rounded;
}

.se-select__title_opened {
  @apply border-r border-t border-l border-solid border-green rounded-t rounded-b-none;
}

.se-select__tools {
  @apply flex gap-2;
}

.se-select__option {
  @apply flex w-full p-2 pl-4 hover:bg-light-orange hover:text-orange;
}

.options-enter-active,
.options-leave-active {
  @apply transition-opacity duration-200;
}

.options-enter-from,
.options-leave-to {
  @apply opacity-0;
}

.se-select__icon {
  @apply duration-300;
}

.se-select__icon_opened {
  @apply origin-center -rotate-180 duration-300;
}
</style>