<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 48C141.31 48 48 141.31 48 256C48 370.69 141.31 464 256 464C370.69 464 464 370.69 464 256C464 141.31 370.69 48 256 48ZM330.69 300.82C321.31 312.26 304.29 330.55 264.99 357.23C259.565 360.945 252.415 360.945 246.99 357.23C207.69 330.55 190.67 312.23 181.29 300.82C161.29 276.45 151.71 251.42 151.99 224.32C152.3 193.26 177.21 167.99 207.52 167.99C227.92 167.99 242.52 178.62 251.62 188.4C252.753 189.599 254.33 190.278 255.98 190.278C257.63 190.278 259.207 189.599 260.34 188.4C269.45 178.62 284.04 167.99 304.44 167.99C334.75 167.99 359.66 193.26 359.97 224.32C360.27 251.42 350.68 276.45 330.69 300.82Z" fill="currentColor"/>
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
