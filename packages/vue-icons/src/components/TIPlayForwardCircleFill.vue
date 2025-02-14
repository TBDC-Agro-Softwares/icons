<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 48C141.31 48 48 141.31 48 256C48 370.69 141.31 464 256 464C370.69 464 464 370.69 464 256C464 141.31 370.69 48 256 48ZM394.77 265.3L280.32 334.44C276.98 336.441 272.82 336.485 269.438 334.556C266.056 332.627 263.977 329.024 264 325.13V271.81L160.32 334.44C156.98 336.441 152.82 336.485 149.438 334.556C146.056 332.627 143.977 329.024 144 325.13V186.87C143.977 182.976 146.056 179.373 149.438 177.444C152.82 175.515 156.98 175.559 160.32 177.56L264 240.19V186.87C263.977 182.976 266.056 179.373 269.438 177.444C272.82 175.515 276.98 175.559 280.32 177.56L394.77 246.7C398.014 248.677 399.994 252.201 399.994 256C399.994 259.799 398.014 263.323 394.77 265.3Z" fill="currentColor"/>
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
