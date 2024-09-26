<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M311.75 56C311.75 86.9279 286.678 112 255.75 112C224.822 112 199.75 86.9279 199.75 56C199.75 25.0721 224.822 0 255.75 0C286.678 0 311.75 25.0721 311.75 56ZM384.3 243.49L394.63 277.9C397.74 288.29 392.32 299.56 382.05 303C376.914 304.748 371.289 304.335 366.464 301.855C361.639 299.376 358.028 295.043 356.46 289.85L330.89 204.6L328.72 197.37C327.421 193.707 323.677 191.507 319.845 192.155C316.012 192.804 313.201 196.113 313.18 200C313.177 200.534 313.23 201.067 313.34 201.59L357.08 347.4C358.534 352.246 357.611 357.493 354.591 361.552C351.571 365.611 346.809 368.002 341.75 368H311.75V482.69C311.75 499.15 301.22 512 287.75 512C274.28 512 263.75 499.15 263.75 482.69V368H247.75V482.69C247.75 499.15 237.22 512 223.75 512C210.28 512 199.75 499.15 199.75 482.69V368H170.75C165.692 367.999 160.934 365.606 157.916 361.548C154.898 357.49 153.976 352.244 155.43 347.4L199.16 201.61C199.272 201.081 199.329 200.541 199.33 200C199.291 196.126 196.481 192.837 192.661 192.192C188.841 191.548 185.108 193.733 183.8 197.38L181.63 204.61L156.05 289.86C154.488 295.061 150.878 299.403 146.05 301.889C141.222 304.374 135.59 304.79 130.45 303.04C120.18 299.56 114.76 288.29 117.88 277.9L128.25 243.49V243.38L150.71 168.52H150.77L153.28 160.07C158.93 141.036 176.425 127.984 196.28 127.99H316.28C336.132 127.994 353.621 141.042 359.28 160.07L361.79 168.52H361.84L384.3 243.38V243.49Z" fill="currentColor"/>
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
