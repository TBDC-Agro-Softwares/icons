<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M509.18 193.99C512.327 198.671 512.837 204.643 510.53 209.79C500.578 232.345 484.376 251.58 463.84 265.22C462.214 266.324 460.026 266.082 458.68 264.65C455.987 261.75 453.16 258.943 450.2 256.23C433.05 240.59 411.84 228.86 387.95 221.69C383.902 220.472 380.483 217.734 378.41 214.05C368.199 195.837 354.769 179.627 338.77 166.21C316.901 147.85 290.581 135.575 262.46 130.62C261.392 130.425 260.45 129.805 259.848 128.902C259.247 127.999 259.038 126.89 259.27 125.83C268.36 84.8001 295.91 50.1101 334.54 33.2901C341.299 30.3616 349.183 32.4256 353.64 38.2901C357.156 43.0015 357.863 49.2414 355.49 54.6201C350.79 65.5401 348.31 79.6301 348.31 95.3801C348.31 150.69 394.39 196.09 449.69 195.69C465.13 195.58 478.91 193.06 489.61 188.41C496.628 185.348 504.832 187.687 509.18 193.99ZM106 480H340C373.2 480 404.11 468.54 427 447.72C450.87 426.07 464 396.05 464 363.2C464 329.82 451.77 301 428.63 279.89C412.43 265.11 391.01 254.55 367.01 249.33C362.098 248.238 357.982 244.906 355.89 240.33C347.151 221.24 334.293 204.322 318.24 190.79C294.15 170.65 264.33 160 232 160C195.65 159.844 160.668 173.85 134.47 199.05C112.39 220.31 97.29 248.26 90.14 280.8C88.8673 286.796 84.2806 291.538 78.33 293.01C62.2 296.89 47.1 303.8 35 313.06C12.09 330.55 0 355.36 0 384.8C0 415.35 11.23 440.44 32.47 457.36C51.08 472.17 76.5 480 106 480Z" fill="currentColor"/>
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
