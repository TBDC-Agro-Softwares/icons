<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M199.45 295.901C214.262 311.256 234.665 319.951 256 320.001C300.11 320.001 336 283.661 336 239.001V128.001C336 83.1412 300.86 48.0012 256 48.0012C234.757 47.9184 214.361 56.3204 199.34 71.3413C184.319 86.3622 175.917 106.759 176 128.001V239.001C176.014 260.317 184.442 280.765 199.45 295.901ZM144 240.001V192.001H112V240.001L112.019 242.374C113.209 315.141 168.998 375.183 240 383.113V432.001H176V464.001H240H272H336V432.001H272V383.113C343.772 375.097 400 313.832 400 240.001V192.001H368V240.001L367.985 241.845C366.991 302.541 316.993 351.956 256.083 352.001L256 352.001L255.917 352.001C194.391 351.956 144 301.537 144 240.001Z" fill="currentColor"/>
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
