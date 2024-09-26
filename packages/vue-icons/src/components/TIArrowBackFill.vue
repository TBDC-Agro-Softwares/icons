<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M260.971 95.0294C251.598 85.6569 236.402 85.6569 227.029 95.0294L83.0294 239.029L82.7426 239.321C73.6579 248.715 73.7535 263.695 83.0294 272.971L227.029 416.971L227.321 417.257C236.715 426.342 251.695 426.247 260.971 416.971L261.257 416.679C270.342 407.285 270.247 392.305 260.971 383.029L157.941 280H412L412.397 279.997C425.469 279.785 436 269.122 436 256C436 242.745 425.255 232 412 232H157.941L260.971 128.971L261.257 128.679C270.342 119.285 270.247 104.305 260.971 95.0294Z" fill="currentColor"/>
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
