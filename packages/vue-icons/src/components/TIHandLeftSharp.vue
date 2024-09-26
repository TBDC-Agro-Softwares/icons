<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M429.58 209.08C414.52 202.46 397.2 210.39 391.08 226.7L356 312H344.73V80C344.73 62.4 331.43 48 315.18 48C298.92 48 285.63 62.4 285.63 80V231.75L270.85 232V32C270.85 14.4 257.55 0 241.3 0C225.05 0 211.75 14.4 211.75 32V231.75L197 232V64C197 46.4 183.7 32 167.45 32C151.19 32 137.9 46.4 137.9 64V247.75L123.1 248V128C123.1 110.4 109.8 96 93.55 96C77.3 96 64 110.4 64 128V344C64 419.8 101.13 512 233 512C273.8 512 312.42 505 333.66 491C346.979 482.22 358.438 470.901 367.38 457.69C374.062 447.831 379.44 437.149 383.38 425.91L445.83 250.77C452 234.46 444.64 215.71 429.58 209.08Z" fill="currentColor"/>
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
