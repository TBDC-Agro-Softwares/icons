<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M262.95 312.22C272.769 319.353 274.957 333.09 267.84 342.92V342.91C264.415 347.641 259.249 350.817 253.481 351.736C247.713 352.655 241.816 351.243 237.09 347.81C236.16 347.15 220.68 335.79 198.16 311.71C145.13 370.41 98.69 396.12 96.53 397.3C89.6294 401.064 81.245 400.86 74.5352 396.766C67.8254 392.672 63.8095 385.309 64.0002 377.451C64.191 369.593 68.5594 362.434 75.46 358.67C91.57 349.79 130.07 322.28 169.31 277.93C168.4 276.77 167.49 275.61 166.57 274.42C128.26 224.72 114.29 191.87 113.71 190.49C109.184 179.322 114.484 166.591 125.599 161.935C136.713 157.279 149.505 162.431 154.29 173.49C154.38 173.71 166.05 200.68 197.46 242.36C224.2 203.5 241.73 160.95 251.25 134H54C41.8497 134 32 124.15 32 112C32 99.8497 41.8497 90 54 90H170V70C170 57.8497 179.85 48 192 48C204.15 48 214 57.8497 214 70V90H330C342.15 90 352 99.8497 352 112C352 124.15 342.15 134 330 134H297.73C288.57 162.74 266.11 223.81 226.46 277.49C247.751 300.871 262.475 311.865 262.941 312.213L262.95 312.22ZM478.33 433.6L388.33 215.6C384.931 207.367 376.902 201.996 367.995 201.996C359.088 201.996 351.059 207.367 347.66 215.6L257.66 433.6C254.615 440.874 255.696 449.221 260.494 455.48C265.291 461.738 273.071 464.95 280.887 463.899C288.702 462.847 295.357 457.694 298.33 450.39L316.66 406H419.33L437.66 450.39C441.058 458.627 449.089 464.001 458 464C465.342 463.996 472.197 460.329 476.277 454.226C480.357 448.122 481.123 440.385 478.32 433.6H478.33ZM334.83 362L368 281.65L401.17 362H334.83Z" fill="currentColor"/>
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
