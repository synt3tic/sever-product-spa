<script setup lang="ts">
import SeSvg from '@/components/UI/SeSvg/SeSvg.vue';
import { computed, onMounted, ref } from 'vue';
import SeButton from '@/components/UI/SeButton/SeButton.vue';
import SeCheckbox from '@/components/UI/SeCheckbox/SeCheckbox.vue';

interface Option {
  id: number;
  name: string;
  data: object;
  selected: boolean;
}

interface Props {
  options: Option[];
  multiple: boolean;
}

const props = withDefaults(defineProps<Props>(), {
});

const emit = defineEmits(['update:modelValue']);

const setValueType = (): {} | [] | Option[] | Option => {
  if (props.multiple) {
    return [];
  } else {
    return {};
  }
};

const setInitialValues = () => {
  if (props.multiple) {
    value.value = props.options.filter(el => el.selected);
  } else {
    value.value = props.options.find(el => el.selected) || {};
  }
};

const value = ref(setValueType());

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

const clear = () => {
  if (props.multiple) {
    value.value = [];
    const cleanedOptions = props.options.map(el => {
      el.selected = false;
      return el;
    });
    emit('update:modelValue', cleanedOptions);
  }
};

const selectOption = (option: Option) => {
  let newOptionsArray;
  if (props.multiple) {
    newOptionsArray = props.options.map(el => {
      if (el.id === option.id) {
        el.selected = !option.selected;
        return el;
      } else {
        return el;
      }
    });
  } else {
    newOptionsArray = props.options.map(el => {
      if (el.id === option.id) {
        el.selected = true;
        return el;
      } else {
        el.selected = false;
        return el;
      }
    });
    value.value = option;
    areOptionsOpen.value = !areOptionsOpen.value;
  }
  emit('update:modelValue', newOptionsArray);
  setInitialValues();
};


const areOptionsOpen = ref(false);

const selectClasses = computed(() => {
  return {
    'se-select': true,
    'se-select_deployed': areOptionsOpen.value,
  };
});


onMounted(() => {
  setInitialValues();
});

</script>

<template>
      <div :class="selectClasses">
        <div class="se-select__title" @click="areOptionsOpen = !areOptionsOpen">
          <p>{{ placeholder }}</p>
          <div class="se-select__tools">
            <se-button
              v-if="isShowClearButton"
              size="xs"
              icon="cross"
              variation="secondary"
              @click="clear"
            />
            <se-svg name="select" />
          </div>
        </div>
        <ul v-if="areOptionsOpen" class="se-select__options">
          <li
            v-for="option in options"
            :key="option.id"
            class="se-select__option"
            @click="selectOption(option)"
          >
            <se-checkbox
              v-if="multiple"
              :checked="option.selected"
              @click.stop
            >{{ option.name }}
            </se-checkbox>
            <p v-else>
              {{ option.name }}
            </p>
          </li>
        </ul>
      </div>
</template>

<style scoped>
.se-select {
  @apply flex flex-col items-center rounded border border-solid border-white cursor-pointer shadow transition ease-in-out select-none;
}

.se-select_deployed {
  @apply border border-solid border-green shadow-green/20 transition ease-in-out;
}

.se-select__options {
  @apply w-full flex flex-col;
}

.se-select__title {
  @apply flex justify-between pl-4 p-2 w-full;
}

.se-select__tools {
  @apply flex gap-2;
}

.se-select__option {
  @apply flex w-full p-2 pl-4 hover:bg-light-orange hover:text-orange z-10;
}
</style>