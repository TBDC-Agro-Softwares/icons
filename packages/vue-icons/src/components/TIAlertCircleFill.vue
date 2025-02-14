<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 48C141.31 48 48 141.31 48 256C48 370.69 141.31 464 256 464C370.69 464 464 370.69 464 256C464 141.31 370.69 48 256 48ZM256 367.91C244.954 367.91 236 358.956 236 347.91C236 336.864 244.954 327.91 256 327.91C267.046 327.91 276 336.864 276 347.91C276 358.956 267.046 367.91 256 367.91ZM277.72 166.76L271.98 288.76C271.98 297.597 264.817 304.76 255.98 304.76C247.143 304.76 239.98 297.597 239.98 288.76L234.24 166.82V166.77C233.897 158.788 237.961 151.261 244.822 147.168C251.683 143.074 260.237 143.074 267.098 147.168C273.959 151.261 278.023 158.788 277.68 166.77L277.72 166.76Z" fill="currentColor"/>
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
