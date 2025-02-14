<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0ZM362.684 167.993C374.433 171.217 383.686 180.717 386.827 192.781C392.533 214.645 392.533 260.267 392.533 260.267C392.533 260.267 392.533 305.886 386.827 327.753C383.686 339.817 374.433 349.316 362.684 352.542C341.391 358.4 256 358.4 256 358.4C256 358.4 170.609 358.4 149.315 352.542C137.565 349.316 128.311 339.817 125.171 327.753C119.467 305.886 119.467 260.267 119.467 260.267C119.467 260.267 119.467 214.645 125.171 192.781C128.311 180.717 137.565 171.217 149.315 167.993C170.609 162.133 256 162.133 256 162.133C256 162.133 341.391 162.133 362.684 167.993Z" fill="currentColor"/>
<path d="M230.415 307.198V221.865L298.682 264.533L230.415 307.198Z" fill="currentColor"/>
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
