<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M396 432H136C99.56 432 65.64 419.43 40.49 396.59C14.38 372.88 0 340 0 304C0 267.42 13.39 235.88 38.72 212.78C56.83 196.25 80.94 184.53 107.9 178.91C112.941 177.867 117.173 174.462 119.27 169.76C128.869 148.152 143.247 129.004 161.32 113.76C187.76 91.69 220.5 80 256 80C295.933 79.8262 334.363 95.214 363.14 122.9C387.87 146.71 404.64 178.18 412.32 214.9C413.58 221.05 418.319 225.895 424.44 227.29C470 237.42 512 270.43 512 328C512 361.39 499.76 388.78 476.59 407.23C456.23 423.43 428.37 432 396 432Z" fill="currentColor"/>
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
