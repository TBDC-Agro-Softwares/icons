<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M234 26H278V118H234V26ZM234 486V394H278V486H234ZM403.079 77.8034L338.025 142.857L369.138 173.97L434.192 108.916L403.079 77.8034ZM77.8154 403.074L142.869 338.02L173.982 369.133L108.928 434.187L77.8154 403.074ZM486 234H394V278H486V234ZM26 234H118V278H26V234ZM369.141 338.027L338.029 369.139L403.083 434.193L434.195 403.081L369.141 338.027ZM77.8021 108.919L108.915 77.8067L173.969 142.861L142.856 173.973L77.8021 108.919ZM154 256C154 312.333 199.667 358 256 358C312.306 357.934 357.934 312.306 358 256C358 199.667 312.333 154 256 154C199.667 154 154 199.667 154 256Z" fill="currentColor"/>
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
