<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M176 96C176 51.8172 211.817 16 256 16C300.183 16 336 51.8172 336 96C336 134.703 308.516 166.987 272 174.4V457.56C271.998 461.811 271.152 466.019 269.51 469.94L259.44 493.94C258.753 495.198 257.433 495.98 256 495.98C254.567 495.98 253.247 495.198 252.56 493.94L242.49 469.94C240.848 466.019 240.002 461.811 240 457.56V174.4C203.484 166.987 176 134.703 176 96ZM270.135 50.1149C265.666 48.7401 260.919 48 256 48C229.49 48 208 69.4903 208 96C208 122.51 229.49 144 256 144C282.51 144 304 122.51 304 96C304 91.0806 303.26 86.334 301.885 81.8655C298.122 90.1998 289.738 96 280 96C266.745 96 256 85.2548 256 72C256 62.2615 261.8 53.8778 270.135 50.1149Z" fill="currentColor"/>
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
