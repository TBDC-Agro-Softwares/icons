<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M376 432H116C83.63 432 55.77 423.43 35.41 407.23C12.24 388.78 0 361.39 0 328C0 270.43 42 237.42 87.56 227.25C93.6808 225.855 98.4205 221.01 99.68 214.86C107.36 178.18 124.13 146.71 148.86 122.86C177.644 95.1887 216.073 79.8155 256 80.0001C291.5 80.0001 324.24 91.6901 350.68 113.8C368.753 129.045 383.131 148.192 392.73 169.8C394.825 174.505 399.057 177.915 404.1 178.96C431.1 184.57 455.17 196.29 473.28 212.81C498.61 235.88 512 267.42 512 304C512 340 497.62 372.88 471.51 396.59C446.36 419.43 412.44 432 376 432Z" fill="currentColor"/>
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
