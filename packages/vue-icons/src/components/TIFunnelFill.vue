<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M296 464C293.434 463.998 290.884 463.583 288.45 462.77L208.3 436.1C198.524 432.815 191.954 423.633 192 413.32V294.11C191.978 294.062 191.948 294.018 191.91 293.98L23.2601 97.54C15.6236 88.6435 13.8695 76.1136 18.7695 65.4621C23.6695 54.8106 34.3256 47.9897 46.0501 48H466C477.725 47.9897 488.381 54.8106 493.281 65.4621C498.181 76.1136 496.427 88.6435 488.79 97.54L320.09 294C320.056 294.04 320.026 294.084 320 294.13V440C320.019 446.371 317.496 452.486 312.991 456.991C308.486 461.496 302.371 464.019 296 464Z" fill="currentColor"/>
</svg>
</template>

<script lang="ts" setup>
import { computed, type PropType } from 'vue';
import type { IconColorClasses, IconsSize } from '@/types';

const props = defineProps({
  size: {
    type: String as PropType<IconsSize>,
    default: 'is-default',
    validator(value: string) {
      return ['is-small', 'is-medium', 'is-large', 'is-default', 'is-12', 'is-16', 'is-14', 'is-26', 'is-28', 'is-36'].indexOf(value) > -1;
    }
  },
  type: {
    type: String as PropType<IconColorClasses>,
    default: undefined
  },
  title: {
    type: String,
    default: undefined
  },
  color: {
    type: String,
    default: undefined
  },
  clickable: {
    type: Boolean,
    default: false
  }
});

const className = computed(() => [
  'icon',
  props.size,
  {
    [props.type as string]: props.type && !props.color,
    'is-clickable': props.clickable
  }
]);
</script>
