<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M469 32L313.8 303.9C313.572 304.332 313.535 304.84 313.7 305.3L413 480H309.9C309.1 480 308.7 480 308.3 479.3L209.4 305.5C208.998 305.004 208.998 304.296 209.4 303.8L365 32H469Z" fill="currentColor"/>
<path d="M163 113L221.9 216.2C222 216.594 222 217.006 221.9 217.4L141.4 351.1C141.123 351.72 140.473 352.085 139.8 352H43L124 217.2C124.066 216.93 124.031 216.645 123.9 216.4L65 112H161C161.808 111.895 162.599 112.29 163 113Z" fill="currentColor"/>
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
