<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M481.292 229.48L292.422 116.48C282.905 110.69 270.99 110.54 261.332 116.09C250.857 122.19 244.459 133.439 244.572 145.56V224.61L63.8516 116.45C54.335 110.66 42.4204 110.51 32.7616 116.06C22.2869 122.16 15.889 133.409 16.0016 145.53V366.53C15.8854 378.654 22.2837 389.909 32.7616 396.01C42.4204 401.56 54.335 401.411 63.8516 395.62L244.572 287.41V366.49C244.441 378.629 250.841 389.902 261.332 396.01C270.99 401.56 282.905 401.411 292.422 395.62L481.292 282.62C490.419 276.903 495.961 266.89 495.961 256.12C495.961 245.35 490.419 235.338 481.292 229.62V229.48Z" fill="currentColor"/>
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
