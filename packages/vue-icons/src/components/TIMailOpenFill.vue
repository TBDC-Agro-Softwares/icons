<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M448.67 155.45L274.1 69.2C262.683 63.5998 249.317 63.5998 237.9 69.2L63.33 155.45C44.149 164.756 31.9783 184.211 32 205.53V390.14C32 421.02 57.42 446.14 88.67 446.14H423.33C454.58 446.14 480 421.02 480 390.14V205.53C480.022 184.211 467.851 164.756 448.67 155.45ZM252.38 97.82C254.663 96.7 257.337 96.7 259.62 97.82L429 181.48L257 266.48C254.717 267.6 252.043 267.6 249.76 266.48L80.35 182.81L252.38 97.82Z" fill="currentColor"/>
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
