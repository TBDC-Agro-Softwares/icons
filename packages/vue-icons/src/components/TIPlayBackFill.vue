<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.7109 229.47L219.581 116.47C229.098 110.68 241.012 110.53 250.671 116.08C261.146 122.18 267.543 133.429 267.431 145.55V224.6L448.151 116.44C457.668 110.65 469.582 110.5 479.241 116.05C489.716 122.15 496.113 133.399 496.001 145.52V366.52C496.119 378.645 489.72 389.9 479.241 396C469.582 401.55 457.668 401.4 448.151 395.61L267.431 287.4V366.48C267.564 378.619 261.163 389.893 250.671 396C241.012 401.55 229.098 401.4 219.581 395.61L30.7109 282.61C21.5836 276.892 16.041 266.88 16.041 256.11C16.041 245.34 21.5836 235.328 30.7109 229.61V229.47Z" fill="currentColor"/>
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
