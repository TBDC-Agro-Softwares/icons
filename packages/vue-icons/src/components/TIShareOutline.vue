<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M262.123 33.2132C260.237 32.4315 258.169 32 256 32C251.617 32 247.646 33.7621 244.757 36.6165C244.73 36.6425 244.704 36.6686 244.678 36.6947L164.686 116.686L164.43 116.949C158.439 123.215 158.525 133.152 164.686 139.314L164.949 139.57C171.215 145.561 181.152 145.475 187.314 139.314L240 86.6271V321L240.003 321.315C240.171 330.006 247.269 337 256 337C264.837 337 272 329.837 272 321V86.6271L324.686 139.314L324.949 139.57C331.215 145.561 341.152 145.475 347.314 139.314C353.562 133.065 353.562 122.935 347.314 116.686L267.319 36.692C267.232 36.6047 267.144 36.5183 267.055 36.4331L267.051 36.4296C265.579 35.022 263.904 33.9499 262.123 33.2132ZM192 192C192 200.731 185.006 207.829 176.315 207.997L176 208H136C122.878 208 112.215 218.531 112.003 231.603L112 232V424C112 437.122 122.531 447.785 135.603 447.997L136 448H376C389.122 448 399.785 437.469 399.997 424.397L400 424V232C400 218.878 389.469 208.215 376.397 208.003L376 208H336C327.163 208 320 200.837 320 192C320 183.269 326.994 176.171 335.685 176.003L336 176H376C406.619 176 431.498 200.573 431.992 231.074L432 232V424C432 454.619 407.427 479.498 376.926 479.992L376 480H136C105.381 480 80.502 455.427 80.0075 424.926L80 424V232C80 201.381 104.573 176.502 135.074 176.008L136 176H176C184.837 176 192 183.163 192 192Z" fill="currentColor"/>
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
