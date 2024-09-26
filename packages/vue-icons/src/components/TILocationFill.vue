<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M96 185C96 100.65 167.78 32 256 32C344.22 32 416 100.65 416 185C416 225.19 397.69 278.61 361.64 343.78C332.64 396.12 299.06 443.45 281.64 467C275.66 475.161 266.148 479.983 256.03 479.983C245.912 479.983 236.4 475.161 230.42 467C212.97 443.45 179.42 396.12 150.42 343.78C114.31 278.59 96 225.17 96 185ZM192 192C192 227.346 220.654 256 256 256C291.33 255.961 319.961 227.33 320 192C320 156.654 291.346 128 256 128C220.654 128 192 156.654 192 192Z" fill="currentColor"/>
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
