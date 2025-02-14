<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 48C141.13 48 48 141.13 48 256C48 370.87 141.13 464 256 464C370.87 464 464 370.87 464 256C464 141.13 370.87 48 256 48ZM347.36 260.65C344.371 263.663 340.308 265.366 336.064 265.383C331.82 265.4 327.743 263.729 324.73 260.74L272 208.42V342C272 350.837 264.837 358 256 358C247.163 358 240 350.837 240 342V208.42L187.27 260.74C183.208 264.766 177.306 266.32 171.788 264.815C166.27 263.31 161.974 258.976 160.518 253.445C159.062 247.914 160.668 242.026 164.73 238L244.73 158.61C250.968 152.42 261.032 152.42 267.27 158.61L347.27 238C350.289 240.99 351.996 245.057 352.013 249.306C352.03 253.555 350.356 257.637 347.36 260.65Z" fill="currentColor"/>
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
