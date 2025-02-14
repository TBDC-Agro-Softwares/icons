<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M391 480C371.48 480 344.06 472.94 303 450C253.07 422 214.45 396.15 164.79 346.62C116.91 298.77 93.6104 267.79 61.0004 208.45C24.1604 141.45 30.4404 106.33 37.4604 91.32C45.8204 73.38 58.1604 62.65 74.1104 52C83.1699 46.0644 92.7571 40.9762 102.75 36.8C103.75 36.37 104.68 35.96 105.51 35.59C110.46 33.36 117.96 29.99 127.46 33.59C133.8 35.97 139.46 40.84 148.32 49.59C166.49 67.51 191.32 107.42 200.48 127.02C206.63 140.23 210.7 148.95 210.71 158.73C210.71 170.18 204.95 179.01 197.96 188.54C196.65 190.33 195.35 192.04 194.09 193.7C186.48 203.7 184.81 206.59 185.91 211.75C188.14 222.12 204.77 252.99 232.1 280.26C259.43 307.53 289.41 323.11 299.82 325.33C305.2 326.48 308.15 324.74 318.47 316.86C319.95 315.73 321.47 314.56 323.06 313.39C333.72 305.46 342.14 299.85 353.32 299.85H353.38C363.11 299.85 371.44 304.07 385.24 311.03C403.24 320.11 444.35 344.62 462.38 362.81C471.15 371.65 476.04 377.29 478.43 383.62C482.03 393.15 478.64 400.62 476.43 405.62C476.06 406.45 475.65 407.36 475.22 408.37C471.011 418.345 465.893 427.913 459.93 436.95C449.3 452.85 438.53 465.16 420.55 473.53C411.318 477.897 401.213 480.109 391 480Z" fill="currentColor"/>
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
