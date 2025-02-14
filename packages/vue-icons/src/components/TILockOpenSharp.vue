<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M420 192H198V111.25C198.031 87.7932 212.169 66.6578 233.838 57.6749C255.507 48.692 280.452 53.6253 297.07 70.18C307.994 81.3509 314.076 96.3759 314 112H352C352 77.7025 333.702 46.0103 304 28.8616C274.298 11.7128 237.702 11.7128 208 28.8616C178.298 46.0103 160 77.7025 160 112V192H92C85.3726 192 80 197.373 80 204V484C80 490.627 85.3726 496 92 496H420C426.627 496 432 490.627 432 484V204C432 197.373 426.627 192 420 192Z" fill="currentColor"/>
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
