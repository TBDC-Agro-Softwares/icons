<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M264 480C135.87 480 32 376.13 32 248C32 154 86 69.72 169.61 33.33C175.64 30.7018 182.665 32.0324 187.316 36.6838C191.968 41.3353 193.298 48.3597 190.67 54.39C181.07 76.43 176 104.66 176 136C176 246.28 265.72 336 376 336C407.34 336 435.57 330.93 457.61 321.33C463.64 318.702 470.665 320.032 475.316 324.684C479.968 329.335 481.298 336.36 478.67 342.39C442.28 426 358 480 264 480Z" fill="currentColor"/>
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
