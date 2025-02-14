<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M352.92 64C304.81 64 272.82 92 256 112.21C239.18 92 207.19 64 159.08 64C98.4596 64 48.6296 114.54 47.9996 176.65C47.4396 232.33 67.7096 283.65 110 333.65C150.12 381.11 204.25 413.4 247 441.97L256 447.97L265 441.97C307.78 413.4 361.91 381.11 402 333.65C444.25 283.65 464.52 232.3 464 176.65C463.37 114.54 413.54 64 352.92 64ZM377.59 313C345.81 350.6 302.91 378.75 265.07 403.59L256 409.59V162.23L280.59 132.69C294.53 116 318.38 96 352.92 96C396.07 96 431.54 132.32 431.99 177C432.308 200.475 427.996 223.783 419.3 245.59C410.27 268.43 396.63 290.5 377.59 313Z" fill="currentColor"/>
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
