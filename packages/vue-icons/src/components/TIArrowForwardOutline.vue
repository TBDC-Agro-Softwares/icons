<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M284.679 94.7426C275.285 85.6579 260.305 85.7535 251.029 95.0294L250.743 95.3212C241.658 104.715 241.753 119.695 251.029 128.971L354.059 232H100L99.6031 232.003C86.5313 232.215 76 242.878 76 256C76 269.255 86.7452 280 100 280H354.059L251.029 383.029L250.743 383.321C241.658 392.715 241.753 407.695 251.029 416.971C260.402 426.343 275.598 426.343 284.971 416.971L428.971 272.971L429.257 272.679C438.342 263.285 438.247 248.305 428.971 239.029L284.971 95.0294L284.679 94.7426Z" fill="currentColor"/>
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
