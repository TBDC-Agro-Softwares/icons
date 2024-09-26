<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M469.11 382.76L325 153.92V74H357V32H155V74H187V153.92L42.89 382.76C29.89 403.4 28.11 426.49 39.89 447.86C51.67 469.23 71.59 480 96 480H416C440.41 480 460.32 469.24 472.1 447.86C483.88 426.48 482.14 403.4 469.11 382.76ZM224.39 173.39C227.421 168.605 229.024 163.054 229.01 157.39V74H283.01V158.59C283.009 163.482 284.396 168.275 287.01 172.41L356.82 283H155.18L224.39 173.39Z" fill="currentColor"/>
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
