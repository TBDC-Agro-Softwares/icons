<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M464 56C470.373 55.9026 476.625 57.7515 481.92 61.3C490.768 67.2614 496.064 77.2407 496.04 87.91V375.91C496.04 393.583 481.713 407.91 464.04 407.91C349.4 407.9 304.35 429.22 278.68 454.72C277.549 455.827 275.865 456.149 274.406 455.535C272.947 454.921 271.999 453.493 272 451.91V114.78C271.999 110.181 273.986 105.806 277.45 102.78C287.239 94.4347 298.106 87.4452 309.76 82C345.89 64.71 396.39 56.3 464 56ZM48.0001 56C115.61 56.3 166.11 64.75 202.24 82C213.894 87.4551 224.759 94.4583 234.54 102.82C238.012 105.841 240.004 110.218 240 114.82V451.93C240.008 453.577 239.032 455.069 237.521 455.722C236.01 456.376 234.254 456.064 233.06 454.93C190.36 414.57 119.07 407.93 48.0001 407.93C29.7601 407.93 16.0001 393.34 16.0001 374V87.9C15.9807 77.2524 21.2586 67.2926 30.0801 61.33C35.3725 57.7727 41.6237 55.9134 48.0001 56Z" fill="currentColor"/>
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
