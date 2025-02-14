<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M207.19 129.06L212.19 119.67L160 21.9199C154.95 12.4499 142.1 14.8599 140.44 25.4599L89.09 343.7C88.9793 344.345 89.3551 344.975 89.9757 345.185C90.5964 345.394 91.277 345.121 91.58 344.54L207.19 129.06Z" fill="currentColor"/>
<path d="M378.776 113.045C382.679 114.306 385.557 117.635 386.24 121.68L432 400L271.74 491.81C261.667 497.414 249.413 497.414 239.34 491.81L80 400L367.67 115.68C370.591 112.799 374.872 111.784 378.776 113.045Z" fill="currentColor"/>
<path d="M221.32 136.63V136.68L257.11 202.5L256.61 203L124.66 333.44C123.254 334.842 121.031 335 119.441 333.811C117.851 332.621 117.373 330.446 118.32 328.7L221.32 136.63Z" fill="currentColor"/>
<path d="M269 190.77L235.37 129L235.34 128.96L230.34 119.82L246.73 89.1899C250.88 81.2099 261.07 81.9999 265.26 89.9999L301.47 158.68L269 190.77Z" fill="currentColor"/>
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
