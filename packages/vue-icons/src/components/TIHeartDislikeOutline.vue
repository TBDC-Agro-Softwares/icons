<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M417.842 448C413.58 448.007 409.492 446.307 406.492 443.28L40.6519 75.26C34.4221 68.9916 34.4535 58.8598 40.7219 52.63C46.9903 46.4002 57.1221 46.4316 63.3519 52.7L429.182 420.7C433.751 425.281 435.112 432.163 432.63 438.138C430.148 444.113 424.312 448.005 417.842 448ZM364.922 80C316.832 80 284.922 109.55 268.002 131C251.122 109.52 219.172 80 171.082 80C160.582 79.9927 150.137 81.5257 140.082 84.55L168.002 112C190.262 112 213.812 121 231.942 138.67C240.543 147.048 247.87 156.639 253.692 167.14C256.406 172.549 261.94 175.963 267.992 175.963C274.044 175.963 279.577 172.549 282.292 167.14C288.116 156.624 295.451 147.018 304.062 138.63C322.192 121 342.662 112 364.922 112C408.072 112 443.542 148.33 443.992 193C444.532 246.69 421.242 292.55 386.612 332.52L409.242 355.29C412.242 351.85 414.942 348.65 417.382 345.69C457.382 296.94 476.532 246.89 475.992 192.69C475.372 130.52 425.542 80 364.922 80ZM92.0019 193C91.0019 297.6 180.382 372.51 268.002 432C284.092 421.05 300.252 409.6 315.922 397.51L338.582 420.32C323.702 431.93 306.352 444.62 286.002 458.43C275.154 465.865 260.85 465.865 250.002 458.43C171.412 405.08 137.382 368.5 118.612 345.63C78.6319 296.9 59.4619 246.85 60.0019 192.63C60.1502 177.687 63.2071 162.915 69.0019 149.14L94.2419 174.61C92.817 180.638 92.0657 186.806 92.0019 193Z" fill="currentColor"/>
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
