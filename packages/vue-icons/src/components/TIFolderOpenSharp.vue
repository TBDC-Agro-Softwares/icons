<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M436 96C451.464 96 464 108.536 464 124V144H48.0001V92C48.0001 76.536 60.5361 64 76.0001 64H196.84L244.84 96H436ZM44.6601 423.27L16.0801 189.4C15.6803 185.997 16.7546 182.585 19.0322 180.024C21.3097 177.464 24.5733 175.999 28.0001 176H484C487.427 175.999 490.69 177.464 492.968 180.024C495.246 182.585 496.32 185.997 495.92 189.4L467.38 423.27C465.72 437.391 453.739 448.026 439.52 448H72.5201C58.3014 448.026 46.3206 437.391 44.6601 423.27Z" fill="currentColor"/>
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
      return ['is-small', 'is-medium', 'is-large', 'is-default', 'is-12', 'is-14', 'is-26', 'is-28', 'is-36'].indexOf(value) > -1;
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
