<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M76.8291 480C62.6683 479.934 51.2314 468.421 51.2591 454.26C51.3187 451.675 51.7222 449.109 52.4591 446.63L70.8791 380C71.6491 377.54 70.7791 375.06 69.6491 373.1L69.4291 372.7C69.3491 372.57 68.9691 372.04 68.6991 371.65C68.4291 371.26 68.1191 370.84 67.8391 370.43L67.6491 370.16C44.3907 334.908 31.9946 293.603 31.9991 251.37C31.8191 193.78 54.3491 139.37 95.4591 98.09C137.999 55.47 194.899 32 255.819 32C307.499 31.9745 357.646 49.5531 397.999 81.84C437.449 113.59 464.869 157.84 475.209 206.52C478.392 221.308 479.994 236.393 479.989 251.52C479.989 310.45 457.349 365.8 416.229 407.39C374.749 449.39 319.049 472.45 259.399 472.45C238.399 472.45 211.529 467.09 198.629 463.45C183.109 459.11 168.399 453.45 166.779 452.85C165.065 452.193 163.245 451.855 161.409 451.85C159.418 451.838 157.445 452.229 155.609 453L154.759 453.33L87.2791 477.71C83.9649 479.105 80.4231 479.881 76.8291 480Z" fill="currentColor"/>
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
