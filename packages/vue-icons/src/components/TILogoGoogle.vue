<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M473.16 221.48L470.9 211.89H262.46V300.11H387C374.07 361.51 314.07 393.83 265.06 393.83C229.4 393.83 191.81 378.83 166.93 354.72C140.419 328.619 125.38 293.043 125.13 255.84C125.13 218.68 141.83 181.51 166.13 157.06C190.43 132.61 227.13 118.93 263.62 118.93C305.41 118.93 335.36 141.12 346.56 151.24L409.25 88.88C390.86 72.72 340.34 32 261.6 32C200.85 32 142.6 55.27 100.02 97.71C58 139.5 36.25 199.93 36.25 256C36.25 312.07 56.83 369.48 97.55 411.6C141.06 456.52 202.68 480 266.13 480C323.86 480 378.58 457.38 417.58 416.34C455.92 375.94 475.75 320.04 475.75 261.44C475.75 236.77 473.27 222.12 473.16 221.48Z" fill="currentColor"/>
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
