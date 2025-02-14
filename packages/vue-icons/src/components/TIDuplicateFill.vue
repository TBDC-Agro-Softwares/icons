<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M328 32C358.5 32.0368 385.679 51.2562 395.88 80H160C115.817 80 80 115.817 80 160V395.88C51.2562 385.679 32.0368 358.5 32 328V104C32 64.2355 64.2355 32 104 32H328ZM408 112H184C144.235 112 112 144.235 112 184V408C112 447.764 144.235 480 184 480H408C447.764 480 480 447.764 480 408V184C480 144.235 447.764 112 408 112ZM375.55 312H312V375.55C312 384.16 305.38 391.55 296.77 391.98C292.398 392.191 288.131 390.601 284.962 387.582C281.794 384.562 280 380.377 280 376V312H216.45C207.84 312 200.45 305.38 200.02 296.77C199.809 292.398 201.399 288.131 204.418 284.962C207.438 281.794 211.623 280 216 280H280V216.45C280 207.84 286.62 200.45 295.23 200.02C299.602 199.809 303.869 201.399 307.038 204.418C310.206 207.438 312 211.623 312 216V280H376C380.38 279.995 384.571 281.786 387.595 284.955C390.619 288.124 392.211 292.395 392 296.77C391.58 305.38 384.16 312 375.55 312Z" fill="currentColor"/>
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
