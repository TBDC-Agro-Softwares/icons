<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M424.11 199H360L268.8 77.4C265.778 73.3711 261.036 71 256 71C250.964 71 246.222 73.3711 243.2 77.4L152 199H87.8901C69.9333 198.972 55.3417 213.483 55.2701 231.44C55.2515 234.489 55.6931 237.523 56.5801 240.44L102.85 403.58C109.033 425.429 128.983 440.506 151.69 440.49H360.31C383.007 440.42 402.95 425.418 409.31 403.63L455.64 240.27C455.854 239.496 456.008 238.707 456.1 237.91L456.63 232.98C456.69 232.466 456.72 231.948 456.72 231.43C456.643 213.481 442.059 198.978 424.11 199ZM256 113.67L320 199H192L256 113.67ZM256 358.67C235.203 358.571 218.414 341.648 218.48 320.851C218.546 300.053 235.442 283.238 256.24 283.27C277.037 283.303 293.88 300.172 293.88 320.97C293.765 341.807 276.837 358.636 256 358.63V358.67Z" fill="currentColor"/>
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
