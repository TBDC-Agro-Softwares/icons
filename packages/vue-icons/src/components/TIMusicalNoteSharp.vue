<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M381.55 32.0468C363.42 36.3268 254.98 63.1168 225.55 70.2368C224.646 70.4456 224.004 71.2489 224 72.1768V353.297C224 354.139 223.472 354.891 222.68 355.177L182 369.877C152.18 380.537 128 388.817 128 428.937C128 461.407 151.53 476.117 165.95 478.937C170.906 479.757 175.927 480.118 180.95 480.017C189.84 480.017 211.95 476.427 228.47 465.777C256 447.997 256 447.997 256 415.927V169.157C255.997 168.246 256.61 167.449 257.49 167.217L382.49 134.217C383.37 133.985 383.983 133.187 383.98 132.277V33.9968C383.979 33.3914 383.704 32.8191 383.232 32.4402C382.76 32.0613 382.141 31.9166 381.55 32.0468Z" fill="currentColor"/>
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
