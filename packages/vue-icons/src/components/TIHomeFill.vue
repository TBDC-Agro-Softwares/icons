<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M416.11 172.59L490.91 244.15C497.3 250.26 497.81 260.76 491.67 267.12C485.548 273.467 475.445 273.664 469.08 267.56L261.56 69.28C258.467 66.3212 253.593 66.3212 250.5 69.28L43.0004 267.56C39.8374 270.6 35.5651 272.207 31.1828 272.007C26.8005 271.807 22.6927 269.816 19.8204 266.5C14.1604 260 14.9404 250.13 21.1604 244.13L233.86 40.63C239.28 35.14 247.32 32 256 32C264.71 32 272.77 35.14 278.19 40.62L336.11 96V64C336.11 55.1634 343.274 48 352.11 48H400.11C408.947 48 416.11 55.1634 416.11 64V172.59ZM250.5 101.28C253.593 98.3212 258.467 98.3212 261.56 101.28L445.59 277.15C447.17 278.661 448.063 280.754 448.06 282.94V448C448.06 465.673 433.733 480 416.06 480H320C311.164 480 304 472.837 304 464V328C304 323.582 300.419 320 296 320H216C211.582 320 208 323.582 208 328V464C208 472.837 200.837 480 192 480H95.9004C78.2273 480 63.9004 465.673 63.9004 448L63.9304 282.94C63.9279 280.754 64.8204 278.661 66.4004 277.15L250.5 101.28Z" fill="currentColor"/>
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
