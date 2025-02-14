<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M58.79 439.13C52.333 436.906 47.9991 430.829 48 424C48 350.9 62.68 292.44 91.65 250.23C126.65 199.23 181.86 171.77 256 168.36V88C256.001 81.5959 259.82 75.809 265.708 73.2905C271.596 70.7721 278.418 72.0071 283.05 76.43L459.05 244.43C462.211 247.449 463.999 251.629 463.999 256C463.999 260.371 462.211 264.551 459.05 267.57L283.05 435.57C278.418 439.993 271.596 441.228 265.708 438.709C259.82 436.191 256.001 430.404 256 424V344.23C211 345.59 177 352.88 149.93 366.87C120.68 381.99 99.47 404.58 76.61 433.87C72.4059 439.253 65.2481 441.374 58.79 439.15V439.13Z" fill="currentColor"/>
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
