<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M475.219 206.52C464.879 157.87 437.459 113.59 397.999 81.84C357.646 49.5531 307.499 31.9745 255.819 32C194.899 32 137.999 55.47 95.4591 98.09C54.3491 139.33 31.8191 193.78 31.9991 251.37C32.0005 293.593 44.3963 334.887 67.6491 370.13L71.9991 376.18L47.9991 480L162.799 451.44C162.799 451.44 165.099 452.21 166.799 452.86C168.499 453.51 183.129 459.12 198.649 463.46C211.549 467.06 238.389 472.46 259.419 472.46C319.069 472.46 374.769 449.36 416.249 407.4C457.359 365.77 479.999 310.42 479.999 251.49C480.002 236.373 478.4 221.299 475.219 206.52Z" fill="currentColor"/>
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
