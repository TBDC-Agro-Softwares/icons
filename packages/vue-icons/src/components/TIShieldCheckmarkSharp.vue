<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M479.063 111.94L478.273 99.41L465.913 97.2C379.413 81.68 343.303 70.46 262.583 34L255.993 31L249.403 34C168.683 70.46 132.573 81.68 46.0726 97.2L33.7126 99.41L32.9226 111.94C29.0726 173.05 37.2826 229.99 57.3526 281.18C73.7878 322.935 98.1108 361.134 128.993 393.69C182.463 450.42 239.233 475.06 250.063 479.42L256.063 481.83L262.063 479.42C272.893 475.06 329.663 450.42 383.133 393.69C413.964 361.122 438.239 322.924 454.633 281.18C474.703 229.99 482.913 173.05 479.063 111.94ZM226.153 327.94L153.363 256.58L175.763 233.72L224.233 281.21L334.363 154.01L358.563 174.95L226.153 327.94Z" fill="currentColor"/>
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
