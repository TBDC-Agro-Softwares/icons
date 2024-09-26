<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M272.001 464C267.683 464.001 263.549 462.258 260.536 459.166C257.523 456.074 255.887 451.896 256.001 447.58V264.13C256.001 259.712 252.419 256.13 248.001 256.13H64.4106C57.515 256.212 51.3133 251.948 48.9206 245.48C46.1646 237.678 49.8113 229.063 57.3306 225.61L441.331 49.46C447.406 46.6762 454.572 47.9618 459.301 52.6841C464.03 57.4064 465.326 64.5704 462.551 70.65L286.551 454.65C283.948 460.345 278.262 463.999 272.001 464Z" fill="currentColor"/>
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
