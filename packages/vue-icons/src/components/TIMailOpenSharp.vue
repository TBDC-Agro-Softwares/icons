<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M471.05 168.36L263.24 65.69C258.676 63.4393 253.324 63.4393 248.76 65.69L41 168.36C35.5193 171.026 32.0296 176.575 32 182.67V432C32.0238 436.269 33.7432 440.354 36.7798 443.355C39.8163 446.356 43.9209 448.027 48.19 448H463.81C468.079 448.027 472.184 446.356 475.22 443.355C478.257 440.354 479.976 436.269 480 432V182.67C479.98 176.586 476.511 171.041 471.05 168.36ZM256 97.89L429 183.33L253.3 270.11L80.3 184.67L256 97.89Z" fill="currentColor"/>
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
