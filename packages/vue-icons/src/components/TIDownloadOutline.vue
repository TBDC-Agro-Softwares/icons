<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M271.997 47.6851C271.829 38.9939 264.731 32 256 32C247.163 32 240 39.1634 240 48V313.373L187.314 260.686L187.051 260.43C180.785 254.439 170.848 254.525 164.686 260.686C158.438 266.935 158.438 277.065 164.686 283.314L244.686 363.314L244.949 363.57C251.215 369.561 261.152 369.475 267.314 363.314L347.314 283.314L347.57 283.051C353.561 276.785 353.475 266.848 347.314 260.686C341.065 254.438 330.935 254.438 324.686 260.686L272 313.373V48L271.997 47.6851ZM176 160C184.837 160 192 167.163 192 176C192 184.731 185.006 191.829 176.315 191.997L176 192H136C122.878 192 112.215 202.531 112.003 215.603L112 216V424C112 437.122 122.531 447.785 135.603 447.997L136 448H376C389.122 448 399.785 437.469 399.997 424.397L400 424V216C400 202.878 389.469 192.215 376.397 192.003L376 192H336C327.163 192 320 184.837 320 176C320 167.269 326.994 160.171 335.685 160.003L336 160H376C406.619 160 431.498 184.573 431.992 215.074L432 216V424C432 454.619 407.427 479.498 376.926 479.992L376 480H136C105.381 480 80.502 455.427 80.0075 424.926L80 424V216C80 185.381 104.573 160.502 135.074 160.008L136 160H176Z" fill="currentColor"/>
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
