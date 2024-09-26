<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M64.14 392H447.86C474.433 391.967 495.967 370.433 496 343.86V136.14C495.967 109.567 474.433 88.0331 447.86 88H64.14C37.5667 88.0331 16.0331 109.567 16 136.14V343.86C16.0331 370.433 37.5667 391.967 64.14 392ZM400 424C400 415.163 392.837 408 384 408H128L127.685 408.003C118.994 408.171 112 415.269 112 424C112 432.837 119.163 440 128 440H384L384.315 439.997C393.006 439.829 400 432.731 400 424Z" fill="currentColor"/>
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
