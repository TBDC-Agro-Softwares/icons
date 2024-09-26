<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M311.81 56C311.81 86.9279 286.738 112 255.81 112C224.882 112 199.81 86.9279 199.81 56C199.81 25.0721 224.882 0 255.81 0C286.738 0 311.81 25.0721 311.81 56ZM310.39 191.4H310.34L363.32 368H311.81V512H259.81V368H251.81V512H199.81V368H148.31L201.3 191.36L193.76 189.1L157 311.7L111 297.9L127.21 243.74C127.28 243.62 127.28 243.5 127.28 243.38L144.12 187.26L148.83 171.52L149.73 168.52H149.79L152.3 160.07C157.95 141.036 175.445 127.984 195.3 127.99H316.55C336.405 127.984 353.9 141.036 359.55 160.07L362.06 168.52H362.11L363.01 171.52L367.72 187.26L384.56 243.38C384.63 243.5 384.63 243.62 384.63 243.74L400.84 297.9L354.84 311.7L318.05 189.1L310.39 191.4Z" fill="currentColor"/>
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
