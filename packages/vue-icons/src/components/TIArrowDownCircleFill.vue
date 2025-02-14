<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 464C370.87 464 464 370.87 464 256C464 141.13 370.87 48 256 48C141.13 48 48 141.13 48 256C48 370.87 141.13 464 256 464ZM164.64 251.35C167.629 248.337 171.692 246.634 175.936 246.617C180.18 246.6 184.257 248.271 187.27 251.26L240 303.58V170C240 161.163 247.163 154 256 154C264.837 154 272 161.163 272 170V303.58L324.73 251.26C331.009 245.036 341.146 245.081 347.37 251.36C353.594 257.639 353.549 267.776 347.27 274L267.27 353.39C261.032 359.58 250.968 359.58 244.73 353.39L164.73 274C161.711 271.01 160.004 266.943 159.987 262.694C159.97 258.445 161.644 254.363 164.64 251.35Z" fill="currentColor"/>
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
