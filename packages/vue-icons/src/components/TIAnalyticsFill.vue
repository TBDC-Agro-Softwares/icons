<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M456 128C442.778 128.003 430.411 134.541 422.962 145.465C415.513 156.39 413.944 170.29 418.77 182.6L334.6 266.77C325.217 263.077 314.783 263.077 305.4 266.77L245.23 206.6C251.784 189.919 246.441 170.914 232.156 160.091C217.871 149.268 198.13 149.268 183.845 160.091C169.559 170.914 164.217 189.919 170.77 206.6L70.6003 306.77C52.9673 299.853 32.9001 306.252 22.526 322.099C12.1518 337.947 14.3152 358.898 27.7086 372.292C41.1021 385.685 62.0534 387.848 77.901 377.474C93.7486 367.1 100.147 347.033 93.2303 329.4L193.4 229.23C202.783 232.924 213.217 232.924 222.6 229.23L282.77 289.4C276.217 306.081 281.559 325.086 295.845 335.909C310.13 346.732 329.871 346.732 344.156 335.909C358.441 325.086 363.784 306.081 357.23 289.4L441.4 205.23C456.378 211.114 473.424 207.45 484.661 195.93C495.898 184.41 499.136 167.278 492.881 152.451C486.625 137.624 472.093 127.989 456 128Z" fill="currentColor"/>
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
