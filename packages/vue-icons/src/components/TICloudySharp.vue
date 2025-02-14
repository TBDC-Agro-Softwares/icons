<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M376 432H116C83.63 432 55.77 423.43 35.41 407.23C12.24 388.78 0 361.39 0 328C0 266.15 48.44 232.66 97.75 225.36C104.27 184.18 121.75 148.96 148.86 122.9C177.637 95.214 216.067 79.8262 256 80C291.5 80 324.24 91.69 350.68 113.8C370.886 130.842 386.443 152.726 395.9 177.41C426.16 182.22 453.35 194.59 473.28 212.77C498.61 235.88 512 267.42 512 304C512 340 497.62 372.88 471.51 396.59C446.36 419.43 412.44 432 376 432Z" fill="currentColor"/>
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
