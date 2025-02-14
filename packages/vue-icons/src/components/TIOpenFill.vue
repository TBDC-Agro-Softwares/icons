<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M336 48H448C456.837 48 464 55.1634 464 64V176C464 184.837 456.837 192 448 192C439.163 192 432 184.837 432 176V102.63L393.25 141.37C388.053 131.803 380.197 123.947 370.63 118.75L409.37 80H336C327.163 80 320 72.8366 320 64C320 55.1634 327.163 48 336 48ZM370.63 118.75C362.456 114.312 353.301 111.991 344 112H104C73.0858 112.033 48.0331 137.086 48 168V408C48.0331 438.914 73.0858 463.967 104 464H344C374.914 463.967 399.967 438.914 400 408V168C400.009 158.699 397.688 149.544 393.25 141.37L235.31 299.31C232.316 302.319 228.244 304.007 224 304C217.531 303.997 211.7 300.099 209.225 294.122C206.75 288.145 208.117 281.266 212.69 276.69L370.63 118.75Z" fill="currentColor"/>
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
