<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M424.3 187.89C442.46 192 459.66 199.62 473.66 210C498.74 228.58 512 254.25 512 284.19C512 315.02 499.71 340.92 476.45 359.02C455.91 374.99 427.34 383.79 396 383.79H272V230.42L308.71 267.11C311.721 270.119 315.806 271.804 320.062 271.793C324.319 271.781 328.395 270.075 331.39 267.05C337.64 260.74 337.28 250.43 331 244.14L267.31 180.48C261.062 174.237 250.938 174.237 244.69 180.48L181 244.16C174.91 250.25 174.35 260.18 180.15 266.55C183.092 269.791 187.234 271.685 191.61 271.791C195.986 271.897 200.215 270.205 203.31 267.11L240 230.42V383.79H136C99.73 383.79 65.91 371.84 40.79 350.15C14.49 327.39 0 295.91 0 261.39C0 227.24 13.46 197.33 38.92 174.83C57.36 158.58 81.51 147.11 108.26 141.71C113.221 140.708 117.415 137.419 119.57 132.84C129.373 112.202 143.758 94.0746 161.63 79.84C188 58.87 220.65 47.79 256 47.79C296.21 47.79 334.15 62.25 362.84 88.54C387.52 111.12 404.31 140.92 412.11 175.67C413.464 181.76 418.213 186.521 424.3 187.89ZM240 383.79V448.21C240 457.047 247.163 464.21 256 464.21C264.837 464.21 272 457.047 272 448.21V383.79H240Z" fill="currentColor"/>
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
