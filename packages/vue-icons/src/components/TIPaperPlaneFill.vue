<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M473 39.05C466.316 32.368 456.334 30.2305 447.5 33.59L47.4699 185H47.3899C37.9398 188.635 31.7871 197.809 32.0113 207.932C32.2354 218.054 38.7881 226.947 48.3899 230.16L48.7999 230.29L186.1 288.92C191.55 290.574 197.468 289.207 201.64 285.33L422 80C423.786 78.2137 426.39 77.516 428.83 78.1699C431.27 78.8237 433.176 80.7297 433.83 83.1699C434.484 85.61 433.786 88.2137 432 90L226.66 310.26C222.783 314.432 221.415 320.35 223.07 325.8L281.72 463.18C281.78 463.38 281.84 463.56 281.91 463.75C285.11 473.02 293.21 479.56 303 480C303.43 480 303.58 480 304 480C314.114 480.058 323.235 473.927 327 464.54L478.39 64.62C481.798 55.7799 479.686 45.7623 473 39.05Z" fill="currentColor"/>
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
