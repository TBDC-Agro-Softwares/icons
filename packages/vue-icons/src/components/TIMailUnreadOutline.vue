<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M424 199.9C388.681 199.9 360.05 171.269 360.05 135.95C360.05 100.631 388.681 72 424 72C459.319 72 487.95 100.631 487.95 135.95C487.922 171.257 459.307 199.872 424 199.9ZM328 103.9C328 95.0634 320.837 87.9 312 87.9H80L79.0739 87.9075C48.5731 88.402 24 113.281 24 143.9V383.9L24.0075 384.826C24.502 415.327 49.3813 439.9 80 439.9H414.73L415.656 439.892C446.157 439.398 470.73 414.519 470.73 383.9V246.9L470.727 246.585C470.559 237.894 463.461 230.9 454.73 230.9C445.893 230.9 438.73 238.063 438.73 246.9V383.9L438.727 384.297C438.515 397.369 427.852 407.9 414.73 407.9H80L79.6031 407.897C66.5313 407.685 56 397.022 56 383.9V143.9L56.0032 143.503C56.2152 130.431 66.8777 119.9 80 119.9H312L312.315 119.897C321.006 119.729 328 112.631 328 103.9ZM113.542 155.057C106.581 149.88 96.7232 151.195 91.3704 158.077C85.9452 165.052 87.2018 175.105 94.1769 180.53L238.177 292.53L238.474 292.755C244.161 296.971 251.966 296.953 257.639 292.67L344.639 227L344.919 226.785C351.728 221.41 353.023 211.549 347.77 204.591L347.555 204.311C342.18 197.502 332.319 196.207 325.361 201.46L248.145 259.743L113.823 155.27L113.542 155.057Z" fill="currentColor"/>
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
