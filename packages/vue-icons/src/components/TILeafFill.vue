<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M171.519 237.974C167.277 238.102 163.259 239.91 160.35 243C157.427 246.087 155.853 250.21 155.975 254.46C156.097 258.709 157.905 262.736 161 265.65C237.06 337.26 313.51 381.53 403 404.81C383.43 435.29 348.71 456.24 307 462.56C297.807 463.933 288.525 464.615 279.23 464.6C229.92 464.6 180.3 445.39 142.3 410.7C112.89 383.83 72.5299 329.11 47.2399 220.97C31.4899 153.66 27.8899 89.9 33.4899 67.15C35.8799 57.43 40.8699 51.55 48.3099 49.55C54.8199 47.84 61.6299 49.95 66.6299 55.21C111.54 102.76 158.6 110.68 208.42 119.06C247.91 125.7 288.73 132.57 329.57 158.95C375.32 188.5 406.62 228.22 420.06 273.81C430.19 308.17 429.15 343.39 417.42 375.39C330.48 353.88 256.6 311.68 182.97 242.32C179.88 239.41 175.761 237.847 171.519 237.974ZM417.43 375.42C433.3 379.35 449.6 382.6 466.43 385.19H466.44C472.187 385.951 477.072 389.761 479.211 395.149C481.35 400.537 480.406 406.66 476.746 411.155C473.085 415.65 467.279 417.813 461.57 416.81C441.858 413.812 422.312 409.807 403.01 404.81C403.8 403.59 404.57 402.35 405.3 401.1C410.107 392.922 414.167 384.327 417.43 375.42Z" fill="currentColor"/>
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
