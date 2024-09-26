<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 48C141.31 48 48 141.31 48 256C48 370.69 141.31 464 256 464C370.69 464 464 370.69 464 256C464 141.31 370.69 48 256 48ZM205.78 164.82C218.45 151.39 236.28 144 256 144C275.72 144 293.39 151.44 306.11 164.94C319 178.62 325.27 197 323.79 216.76C320.83 256 290.43 288 256 288C221.57 288 191.11 256 188.21 216.75C186.74 196.83 193 178.39 205.78 164.82ZM256 432C208.531 432.031 163.074 412.831 130 378.78C139.376 365.41 151.322 354.042 165.14 345.34C190.63 329 222.89 320 256 320C289.11 320 321.37 329 346.83 345.34C360.66 354.038 372.616 365.406 382 378.78C348.929 412.835 303.47 432.036 256 432Z" fill="currentColor"/>
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
