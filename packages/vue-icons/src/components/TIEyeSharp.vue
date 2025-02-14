<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M394.82 141.18C351.1 111.2 304.31 96 255.76 96C212.07 96 169.48 109 129.17 134.48C88.52 160.23 48.67 207 16 256C42.42 300 78.56 345.24 116.2 371.18C159.38 400.92 206.33 416 255.76 416C304.76 416 351.61 400.93 395.06 371.21C433.31 345 469.71 299.82 496 256C469.62 212.57 433.1 167.44 394.82 141.18ZM256 352C202.981 352 160 309.019 160 256C160 202.981 202.981 160 256 160C309.019 160 352 202.981 352 256C351.939 308.994 308.994 351.939 256 352ZM320 256C320 291.346 291.346 320 256 320C220.654 320 192 291.346 192 256C192 220.654 220.654 192 256 192C291.346 192 320 220.654 320 256Z" fill="currentColor"/>
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
