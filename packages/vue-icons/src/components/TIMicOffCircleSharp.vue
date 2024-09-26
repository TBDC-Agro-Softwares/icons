<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 48C141.31 48 48 141.31 48 256C48 370.69 141.31 464 256 464C370.69 464 464 370.69 464 256C464 141.31 370.69 48 256 48ZM320 248.22V208H352V248.22C351.917 263.598 347.263 278.604 338.63 291.33L316 266.4C318.611 260.694 319.975 254.496 320 248.22ZM256 128C282.478 128.077 303.923 149.522 304 176V240C303.997 243.924 303.513 247.833 302.56 251.64L213.56 153.72C221.856 137.952 238.183 128.057 256 128ZM304 384H208V352H240V334.26C221.806 330.991 204.817 322.92 190.79 310.88C170.94 293.83 160 271.58 160 248.22V208H192V248.22C192 273.88 220 303.7 256 303.7C258.34 303.694 260.678 303.544 263 303.25L287.52 330.25C282.469 331.997 277.286 333.335 272.02 334.25V352H304.02L304 384ZM208.09 242.87L248.59 287.42C226.335 283.865 209.514 265.362 208.09 242.87ZM344.16 367.76L143.66 149.26L167.34 127.74L367.84 346.24L344.16 367.76Z" fill="currentColor"/>
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
      return ['is-small', 'is-medium', 'is-large', 'is-default', 'is-12', 'is-14', 'is-26', 'is-28', 'is-36'].indexOf(value) > -1;
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
