<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M394.24 197.56C381.844 164.671 363.777 134.209 340.86 107.56C301.2 61.65 240 32 192 32C211 102 177.64 149.12 147.21 195.77C122 234.36 96 274.27 96 320C96 408.22 167.78 480 256 480C344.22 480 416 408.22 416 320C416 276.7 408.68 235.51 394.24 197.56ZM288.33 418.69C278 429.69 265.05 432 256 432C246.95 432 234 429.69 223.67 418.69C213.34 407.69 208 390.24 208 368C208 342.86 216.82 323.72 225.34 305.22C231.82 291.15 240 278 240.45 260.73C251.75 266.61 264.12 277.64 274.99 292.01C293.16 316.01 303.99 344.43 303.99 368.01C304 390.24 298.58 407.77 288.33 418.69Z" fill="currentColor"/>
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
