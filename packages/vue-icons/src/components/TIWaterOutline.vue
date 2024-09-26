<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256.005 36C247.826 36 240.056 39.576 234.737 45.7885C207.48 77.6684 178.739 115.687 153.937 156.09C117.296 215.778 96 270.032 96 316.075C96 413.282 158.793 476.075 256 476.075C353.207 476.075 416 413.282 416 316.075C416 270.033 394.705 215.78 358.065 156.09C333.267 115.692 304.547 77.698 277.283 45.7995C271.954 39.576 264.184 36 256.005 36ZM256.004 70.1751L256.727 71.0307C281.859 100.825 308.126 135.904 330.793 172.83C364.606 227.915 384 277.324 384 316.075C384 395.609 335.533 444.075 256 444.075C176.467 444.075 128 395.609 128 316.075C128 277.324 147.394 227.914 181.208 172.831C203.495 136.526 229.274 101.991 254.013 72.5383L256.004 70.1751ZM360 324.075C360 315.239 352.837 308.075 344 308.075C335.163 308.075 328 315.239 328 324.075L327.992 325.001C327.498 355.502 302.619 380.075 272 380.075L271.685 380.078C262.994 380.246 256 387.344 256 396.075C256 404.912 263.163 412.075 272 412.075C320.601 412.075 360 372.676 360 324.075Z" fill="currentColor"/>
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
