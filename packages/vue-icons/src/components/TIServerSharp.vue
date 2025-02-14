<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M111.69 201.14C91.51 192.71 74.92 183.06 63.69 173.22C57.62 167.91 52.84 163.1 50.26 160.37C48.8367 158.877 48.045 156.893 48.05 154.83V128.5C49 99.78 72.85 74.22 115.26 56.53C153.17 40.71 203.16 32 256 32C308.84 32 358.83 40.71 396.84 56.53C439.34 74.26 463.21 99.88 464.05 128.67V128.77V154.83C464.052 156.894 463.257 158.879 461.83 160.37C459.21 163.1 454.42 167.91 448.36 173.22C437.13 183.06 420.54 192.71 400.41 201.14C357.93 218.9 303.96 229.51 256.05 229.51C208.14 229.51 154.17 218.9 111.69 201.14ZM256 421.05C305.4 421.05 362 410 409.43 389.87C456.86 369.75 464 353.16 464 353.16V391.36C464 422.51 446 435 396.68 455.71C358.87 471.59 308.82 480 256 480C203.18 480 153.13 471.59 115.32 455.71C66 435 48 422.51 48 391.36V353.16C48 353.16 54.99 369.99 102.56 389.87C150.13 409.75 206.6 421.05 256 421.05ZM409.43 221.91C365 241 305.4 253.09 256 253.09C206.6 253.09 147.13 240.82 102.57 221.91C58.01 203 48 185.2 48 185.2V232.56C48.08 240.08 53.5 248.76 63.69 257.69C74.93 267.53 91.51 277.19 111.69 285.61C154.12 303.38 208.09 314 256 314C303.91 314 357.88 303.4 400.36 285.63C420.49 277.21 437.08 267.55 448.31 257.71C458.56 248.71 463.99 240 464 232.44V185.2C464 185.2 453.87 202.82 409.43 221.91ZM256 337.56C305.4 337.56 362 326 409.43 306.38C456.87 286.76 464.05 269.67 464.05 269.67V316.05C463.97 323.57 458.55 332.25 448.36 341.18C437.13 351.02 420.54 360.67 400.41 369.1C357.93 386.87 303.97 397.47 256.05 397.47C208.13 397.47 154.17 386.87 111.69 369.1C91.5 360.68 74.92 351.02 63.69 341.18C53.44 332.2 48 323.47 48 315.92V269.67C48 269.67 59.01 288 102.57 306.38C146.13 324.76 206.6 337.56 256 337.56Z" fill="currentColor"/>
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
