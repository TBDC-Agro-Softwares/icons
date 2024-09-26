<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M408.6 117.78C376.53 82.78 329.13 64.27 271.51 64.27C220.51 64.27 170.82 84.07 131.69 120.03C92.5599 155.99 68.5599 203.87 64.0599 254.86C59.5099 306.53 75.4699 355.15 109 391.76C142.37 428.2 189.07 448.27 240.49 448.27C273.01 448.27 294.1 445.91 325.97 432.52L340.72 426.32L328.32 396.82L313.57 403C286.42 414.4 269.79 416.25 240.49 416.25C198.15 416.25 159.84 399.87 132.6 370.13C105.2 340.21 92.1799 300.27 95.9399 257.65C103.78 168.65 182.54 96.25 271.51 96.25C319.91 96.25 359.16 111.16 385 139.38C409.61 166.25 420.6 203.3 416.79 246.53C413.5 283.88 399.03 302.27 387.47 311.13C376.47 319.57 365.47 321.31 359.47 320.24C341.79 317.11 332.6 299.78 334.88 273.95L344.81 164.83L312.9 162L310.9 184.29C295.828 168.863 275.147 160.204 253.58 160.29C229.78 160.29 207.04 170.36 189.58 188.66C172.81 206.19 162.35 229.71 160.13 254.88C157.68 282.75 165.88 309.22 182.64 327.52C197.224 343.477 217.903 352.482 239.52 352.29C266.942 352.592 293.099 340.776 311 320C319.528 336.729 335.396 348.501 353.88 351.81C370.77 354.81 390.61 349.12 406.96 336.6C437.15 313.47 446.32 276.41 448.7 249.4C453.22 197.7 439 151 408.6 117.78ZM282.26 303.78C270.619 314.546 255.305 320.459 239.45 320.31C226.804 320.53 214.677 315.29 206.17 305.93C195.46 294.23 190.27 276.66 191.94 257.71C195.17 221.03 222.23 192.31 253.55 192.31C267.212 192.255 280.255 198.006 289.43 208.13C300.3 220 305.63 237 304.06 254.86C302.28 275.14 294.73 292 282.26 303.74V303.78Z" fill="currentColor"/>
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
