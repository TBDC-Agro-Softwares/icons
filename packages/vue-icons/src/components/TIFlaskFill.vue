<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M452.32 365L327.4 167.12C322.563 159.443 319.997 150.554 320 141.48V64H335.56C344.17 64 351.56 57.38 351.99 48.77C352.201 44.3965 350.61 40.1277 347.588 36.9588C344.567 33.7899 340.379 31.9977 336 32H176.45C167.84 32 160.45 38.62 160.02 47.23C159.809 51.6018 161.399 55.869 164.418 59.0376C167.438 62.2062 171.623 63.9996 176 64H192V141.48C192.006 150.553 189.436 159.44 184.59 167.11L59.68 365C44.9624 387.896 44.0022 417.024 57.18 440.84C70.44 465.19 96.36 480 124.13 480H387.87C415.64 480 441.56 465.19 454.82 440.79C467.978 416.987 467.018 387.884 452.32 365ZM211.66 184.2C219.731 171.414 224.01 156.6 224 141.48V68C224 65.7909 225.791 64 228 64H284C286.209 64 288 65.7909 288 68V141.48C287.993 156.601 292.276 171.415 300.35 184.2L358.15 275.73C359.707 278.197 359.798 281.316 358.387 283.869C356.976 286.423 354.287 288.005 351.37 288H160.63C157.715 288.002 155.029 286.417 153.621 283.865C152.212 281.312 152.304 278.195 153.86 275.73L211.66 184.2Z" fill="currentColor"/>
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
