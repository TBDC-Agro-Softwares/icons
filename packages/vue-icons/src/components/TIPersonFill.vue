<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M257 32C287 32 314.18 43.57 333.64 64.58C353.34 85.85 362.94 114.48 360.67 145.18C356.16 206.29 309.73 256 257 256C204.27 256 157.76 206.28 153.32 145.16C151.08 114.18 160.62 85.49 180.2 64.38C199.57 43.5 226.84 32 257 32ZM56.7999 468.87C62.7802 476.033 71.6692 480.121 80.9999 480H433C442.332 480.119 451.221 476.027 457.2 468.86C463.7 461.09 466.32 450.48 464.38 439.75C455.94 392.93 429.6 353.6 388.2 326C351.42 301.5 304.83 288 257 288C209.17 288 162.58 301.49 125.8 326C84.3999 353.61 58.0599 392.94 49.6199 439.76C47.6799 450.49 50.2999 461.1 56.7999 468.87Z" fill="currentColor"/>
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
