<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M272 240C272 244.418 275.582 248 280 248H464V476C464 482.627 458.627 488 452 488H140C133.373 488 128 482.627 128 476V327.66C81.19 323.76 48 285.64 48 234.13V152H80V234.13C80 251.58 85.47 267.36 95.41 278.59C105.5 290 119.53 296 136 296C152.47 296 166.5 290 176.59 278.59C186.53 267.36 192 251.58 192 234.13V95.38C192 86.15 189.69 56 160 56C136.41 56 128 76.66 128 96V240C128 246.56 133.77 248 136 248C138.143 248.07 140.218 247.25 141.734 245.734C143.25 244.218 144.07 242.143 144 240V88H176V240C176.116 250.644 171.939 260.886 164.413 268.413C156.886 275.939 146.644 280.116 136 280C116.34 280 96 265 96 240V96C96 53.61 122.32 24 160 24C179.59 24 196.72 31.88 208.25 46.19C210.707 49.2581 212.882 52.5414 214.75 56H272V240ZM454.31 216H308C305.791 216 304 214.209 304 212V65.69C303.999 64.8819 304.485 64.1528 305.231 63.8421C305.977 63.5314 306.837 63.7003 307.41 64.27L455.73 212.59C456.3 213.163 456.469 214.023 456.158 214.769C455.847 215.515 455.118 216.001 454.31 216Z" fill="currentColor"/>
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
