<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M360 199H441.59C445.261 198.999 448.73 200.678 451.007 203.557C453.284 206.436 454.118 210.199 453.27 213.77L399.41 441H112.59L58.7304 213.77C57.8831 210.199 58.717 206.436 60.9938 203.557C63.2706 200.678 66.7399 198.999 70.4104 199H152L243.2 77.4C246.222 73.3711 250.964 71 256 71C261.037 71 265.779 73.3711 268.8 77.4L360 199ZM320 199L256 113.67L192.001 199H320ZM256 358.66C235.191 358.561 218.395 341.623 218.471 320.814C218.546 300.004 235.464 283.189 256.274 283.241C277.083 283.292 293.918 300.19 293.89 321C293.769 341.838 276.839 358.666 256 358.66Z" fill="currentColor"/>
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
