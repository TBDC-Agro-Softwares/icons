<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M259.9 48C142.92 46.42 47.4198 141.92 48.9998 258.9C50.5598 371.09 141.91 462.44 254.1 464C371.1 465.6 466.58 370.1 464.98 253.12C463.44 140.91 372.09 49.56 259.9 48ZM352 175.24L269.76 361.76C264.97 372.23 248.98 368.76 248.98 357.2V268C248.98 265.791 247.189 264 244.98 264H155.8C144.28 264 140.8 248.13 151.23 243.33L337.76 161C341.842 159.115 346.666 159.975 349.846 163.154C353.025 166.334 353.885 171.158 352 175.24Z" fill="currentColor"/>
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
