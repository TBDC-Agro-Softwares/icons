<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M399.23 276.64L167.89 47.22C147.553 26.9273 114.627 26.9273 94.2901 47.22L89.7801 51.73C79.7603 61.5859 74.0478 75.0062 73.8901 89.06C73.8119 102.921 79.3069 116.231 89.1401 126L130.65 167.5L46.0001 252C37.5369 260.483 32.8505 272.019 33.0001 284C33.0996 295.692 37.9772 306.835 46.5001 314.84L177.74 440.84C194.832 457.223 221.824 457.144 238.82 440.66L362.93 320.38C365.175 318.148 368.045 316.652 371.16 316.09C375.104 315.46 379.096 315.172 383.09 315.23H383.39C392.543 315.246 400.796 309.723 404.271 301.255C407.747 292.788 405.755 283.059 399.23 276.64ZM153.29 144.85L111.76 103.33C107.992 99.577 105.874 94.478 105.874 89.16C105.874 83.842 107.992 78.743 111.76 74.99L116.92 69.84C120.684 66.0741 125.791 63.9583 131.115 63.9583C136.44 63.9583 141.546 66.0741 145.31 69.84L187 111.21L153.29 144.85ZM353 415.12C353 450.89 381.71 480 417 480C452.29 480 481 450.89 481 415.15C481 381.61 452.17 349.4 436.67 332.1C434.94 330.17 433.44 328.48 432.31 327.17C428.521 322.655 422.929 320.047 417.035 320.047C411.141 320.047 405.549 322.655 401.76 327.17C400.706 328.41 399.314 329.973 397.71 331.773C397.503 332.005 397.293 332.241 397.08 332.48C381.67 349.72 353 381.83 353 415.12Z" fill="currentColor"/>
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
