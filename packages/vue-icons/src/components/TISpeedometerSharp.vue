<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256.001 48C123.461 48 16.0005 156.55 16.0005 290.56C15.8751 349.734 37.3198 406.926 76.3205 451.43C77.5005 452.73 78.5705 454.03 79.7505 455.22C89.2005 464 92.0705 464 99.5705 464C107.071 464 112.001 464 119.501 455.12C152.001 416.64 202.001 400 256.001 400C310.001 400 360.071 416.71 392.501 455.12C400.001 464 404.821 464 412.431 464C420.041 464 423.731 464 432.251 455.22C433.471 453.97 434.501 452.73 435.681 451.43C474.681 406.926 496.126 349.734 496.001 290.56C496.001 156.55 388.541 48 256.001 48ZM240.001 112H272.001V176H240.001V112ZM144.001 304H80.0005V272H144.001V304ZM165.491 220.12L120.241 174.86L142.861 152.24L188.121 197.49L165.491 220.12ZM278.601 307.4C276.657 310.093 274.294 312.457 271.601 314.4C258.069 323.84 239.461 320.632 229.871 307.206C220.282 293.781 223.282 275.138 236.601 265.4L320.001 224L278.601 307.4ZM323.881 197.49L369.141 152.24L391.761 174.86L346.511 220.12L323.881 197.49ZM432.001 304H368.001V272H432.001V304Z" fill="currentColor"/>
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
