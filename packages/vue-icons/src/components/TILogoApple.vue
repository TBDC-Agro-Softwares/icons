<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M272.849 68.86C289.249 48.91 317.249 33.63 341.249 32C345.329 59.29 334.169 85.89 319.449 104.66C304.169 124.38 278.009 139.77 252.449 139.77H250.529C245.729 113.76 257.969 86.94 272.849 68.86Z" fill="currentColor"/>
<path d="M299.387 147.778C313.09 142.577 328.151 136.86 350.129 136.86L350.029 136.9C380.499 136.9 412.819 153.58 435.819 182.38C360.469 223.79 372.709 331.8 448.899 360.72C438.499 384.07 433.459 394.43 419.899 415.07C401.059 443.77 374.549 479.57 341.549 479.92H340.949C327.768 479.92 319.009 475.896 309.576 471.563C298.57 466.507 286.646 461.03 265.709 461.03H265.109C243.864 461.148 231.585 466.644 220.303 471.695C210.626 476.026 201.682 480.03 188.439 480.03H187.839C154.839 479.68 129.679 447.37 110.839 418.56C58.1694 338.08 52.6494 243.61 85.1694 193.45C108.329 157.88 144.799 137 178.999 137C197.314 137 212.063 142.248 226.098 147.242C238.838 151.776 250.991 156.1 264.689 156.1C277.463 156.1 287.952 152.119 299.387 147.778Z" fill="currentColor"/>
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
