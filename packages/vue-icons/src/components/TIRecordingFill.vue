<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M380.79 144.05C321.69 145.7 273.67 193.76 272 252.86C271.155 282.422 282.074 311.111 302.36 332.63C302.896 333.198 303.052 334.026 302.76 334.751C302.467 335.475 301.78 335.963 301 336H211C210.205 335.993 209.49 335.517 209.178 334.786C208.866 334.055 209.016 333.209 209.56 332.63C229.875 311.124 240.824 282.433 240 252.86C238.37 193.76 190.35 145.7 131.25 144.05C101.086 143.207 71.8558 154.559 50.1666 175.538C28.4774 196.518 16.1604 225.355 15.9999 255.53C15.7499 317.77 66.9999 368 129.24 368H382.76C445 368 496.25 317.77 496 255.53C495.839 225.362 483.528 196.532 461.847 175.553C440.167 154.574 410.947 143.218 380.79 144.05Z" fill="currentColor"/>
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
