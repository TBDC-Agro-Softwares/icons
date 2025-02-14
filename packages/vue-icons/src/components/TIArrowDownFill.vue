<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M279.997 99.6031C279.785 86.5313 269.122 76 256 76C242.745 76 232 86.7452 232 100V354.059L128.971 251.029L128.679 250.743C119.285 241.658 104.305 241.753 95.0294 251.029C85.6569 260.402 85.6569 275.598 95.0294 284.971L239.029 428.971L239.321 429.257C248.715 438.342 263.695 438.247 272.971 428.971L416.971 284.971L417.257 284.679C426.342 275.285 426.247 260.305 416.971 251.029L416.679 250.743C407.285 241.658 392.305 241.753 383.029 251.029L280 354.059V100L279.997 99.6031Z" fill="currentColor"/>
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
