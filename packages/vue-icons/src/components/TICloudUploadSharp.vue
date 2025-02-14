<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M414.14 186C435.96 189.25 457.1 197.7 473.66 210C498.74 228.58 512 254.25 512 284.19C512 315.02 499.71 340.92 476.45 359.02C455.91 374.99 427.34 383.79 396 383.79H272V230.42L320 278.42L342.63 255.79L256 169.17L169.37 255.79L192 278.42L240 230.42V383.79H136C99.73 383.79 65.91 371.84 40.79 350.15C14.49 327.39 0 295.91 0 261.39C0 227.24 13.46 197.33 38.92 174.88C59.19 157.01 86.37 144.93 116.31 140.33C125.99 116.62 141.595 95.7921 161.63 79.84C188 58.87 220.65 47.79 256 47.79C296.21 47.79 334.15 62.25 362.84 88.55C389.93 113.33 407.52 146.82 414.14 186ZM240 383.79V464.2H272V383.79H240Z" fill="currentColor"/>
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
