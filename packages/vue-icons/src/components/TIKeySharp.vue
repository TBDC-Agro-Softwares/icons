<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M215.1 167.2C215.1 180.2 215.1 192.8 219.2 204.6C176.1 255.2 51.7002 399.1 51.7002 399.1L54.6002 435.4C54.6002 435.4 89.4002 468.4 94.6002 463.4C110 448.4 119.4 438.2 119.4 438.2L126.64 394.85L173.75 391.38L177.53 344.58L227.16 343.63L227.65 293.54L280.34 295.64L289.34 276.8C304.84 283.5 318.94 286.2 337.04 286.2C405.54 286.2 461.04 232.8 461.04 167C461.04 101.2 405.5 48 337 48C268.5 48 215.1 101.4 215.1 167.2ZM403.85 144C403.85 165.456 386.456 182.85 365 182.85C343.544 182.85 326.15 165.456 326.15 144C326.15 122.544 343.544 105.15 365 105.15C375.307 105.139 385.195 109.229 392.483 116.517C399.771 123.805 403.861 133.693 403.85 144Z" fill="currentColor"/>
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
