<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M411.16 97.45C368.43 55.85 311.88 32 256 32C200.12 32 143.57 55.85 100.84 97.45C56.45 140.67 32 196 32 256C32 316 58.84 374.49 77.42 408.25C96 442.01 121 480 144 480C176 480 240 448 240 448L128 240L73.58 271.73C72.9102 265.472 72.5764 259.183 72.58 252.89C72.58 204.32 91.9 158.79 128.73 122.89C164.24 88.34 210 70 256 70C302 70 347.73 88.34 383.27 122.93C420.1 158.79 439.41 204.32 439.41 252.93C439.414 259.217 439.08 265.499 438.41 271.75L384 240L272 448C272 448 336 480 368 480C391 480 416 442 434.58 408.25C453.16 374.5 480 316 480 256C480 196 455.55 140.67 411.16 97.45Z" fill="currentColor"/>
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
