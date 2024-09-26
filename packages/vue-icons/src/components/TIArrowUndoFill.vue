<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M447.949 439.952C443.023 439.952 438.371 437.683 435.339 433.801C412.479 404.531 391.269 381.941 362.019 366.801C334.949 352.831 300.949 345.541 255.949 344.181V423.952C255.929 430.334 252.118 436.095 246.251 438.609C240.384 441.123 233.584 439.91 228.949 435.521L52.9485 267.521C49.788 264.503 48 260.322 48 255.951C48 251.581 49.788 247.4 52.9485 244.382L228.949 76.3815C233.584 71.9932 240.384 70.7797 246.251 73.2938C252.118 75.8079 255.929 81.5686 255.949 87.9515V168.311C330.089 171.721 385.329 199.221 420.299 250.181C449.269 292.391 463.949 350.852 463.949 423.952C463.949 432.788 456.785 439.952 447.949 439.952Z" fill="currentColor"/>
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
