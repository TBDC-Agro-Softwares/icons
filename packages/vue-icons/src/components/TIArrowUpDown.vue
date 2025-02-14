<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M340.841 186.079L265.335 98.4985C262.872 95.6432 259.277 94 255.493 94C251.709 94 248.114 95.6432 245.651 98.4985L170.145 186.079C162.939 194.439 168.913 207.351 179.987 207.351H331.02C342.094 207.351 348.068 194.439 340.841 186.079Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M170.159 326.92L245.665 414.5C248.128 417.355 251.723 418.998 255.507 418.998C259.291 418.998 262.886 417.355 265.349 414.5L340.855 326.92C348.061 318.56 342.087 305.647 331.013 305.647L179.98 305.647C168.906 305.647 162.932 318.56 170.159 326.92Z" fill="currentColor"/>
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
