<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M376.76 32H138.54C105.67 32 96 56.8 96 72.41V452.05C96 469.64 105.42 476.17 110.72 478.32C116.02 480.47 130.63 482.32 139.39 472.15C139.39 472.15 251.86 341.26 253.79 339.32C256.71 336.39 256.71 336.39 259.63 336.39H332.4C362.98 336.39 367.89 314.52 371.09 301.64C373.74 290.85 403.57 137.64 413.54 89.08C421.14 52 411.74 32 376.76 32ZM371.09 301.64C373.74 290.85 403.57 137.64 413.54 89.08L371.09 301.64ZM362.69 96.67L352.69 148.4C351.5 154.05 344.41 160 337.83 160H241.91C231.47 160 224 166.14 224 176.6V190.05C224 200.52 231.52 207.94 242 207.94H323.85C331.23 207.94 338.46 216.05 336.85 223.94C335.24 231.83 327.76 270.51 326.85 274.83C325.94 279.15 321.01 286.55 312.24 286.55H248C236.3 286.55 232.76 288.09 224.93 297.85C217.1 307.61 146.67 392.44 146.67 392.44C145.96 393.26 145.26 393.02 145.26 392.13V95.9C145.26 89.21 151.06 81.37 159.74 81.37H350.88C354.633 81.4518 358.147 83.2265 360.441 86.198C362.735 89.1694 363.561 93.0188 362.69 96.67Z" fill="currentColor"/>
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
