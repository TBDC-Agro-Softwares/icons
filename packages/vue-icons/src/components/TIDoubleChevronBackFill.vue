<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M107.515 47.5147C112.201 42.8284 119.799 42.8284 124.485 47.5147C129.123 52.1527 129.171 59.6426 124.629 64.3394L124.485 64.4853L60.9705 128L124.485 191.515C129.123 196.153 129.171 203.643 124.629 208.339L124.485 208.485C119.847 213.123 112.357 213.171 107.661 208.629L107.515 208.485L35.5147 136.485C30.8767 131.847 30.8289 124.357 35.3713 119.661L35.5147 119.515L107.515 47.5147Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M203.515 47.5147C208.201 42.8284 215.799 42.8284 220.485 47.5147C225.123 52.1527 225.171 59.6426 220.629 64.3394L220.485 64.4853L156.97 128L220.485 191.515C225.123 196.153 225.171 203.643 220.629 208.339L220.485 208.485C215.847 213.123 208.357 213.171 203.661 208.629L203.515 208.485L131.515 136.485C126.877 131.847 126.829 124.357 131.371 119.661L131.515 119.515L203.515 47.5147Z" fill="currentColor"/>
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
