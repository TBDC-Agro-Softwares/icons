<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M450.2 256.27C431.55 239.25 408.05 226.86 381.55 219.93C371.019 199.359 356.472 181.106 338.77 166.25C316.053 147.184 288.555 134.693 259.25 130.13C270.77 85.19 311.36 45.53 351.77 32C344.7 48.24 341.92 67.31 341.92 86.15C341.92 159.57 384.43 202.08 457.85 202.08C476.69 202.08 495.76 199.3 512 192.23C503.14 218.69 483.08 245.21 457.67 263.61C455.283 261.09 452.793 258.643 450.2 256.27ZM106 480H340C373.2 480 404.11 468.54 427 447.72C450.87 426.07 464 396.05 464 363.2C464 329.82 451.77 301 428.63 279.92C410.66 263.52 386.25 252.32 359.07 247.84C350.43 225.716 336.394 206.104 318.24 190.79C294.15 170.65 264.33 160 232 160C195.655 159.852 160.681 173.861 134.49 199.06C110.12 222.53 94.26 254.14 88.2 291.06C68.41 294.19 49.55 301.93 35 313.06C12.09 330.55 0 355.36 0 384.8C0 415.35 11.23 440.44 32.47 457.36C51.08 472.17 76.5 480 106 480Z" fill="currentColor"/>
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
