<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M389.287 111.167C350.165 70.7468 296.281 47.9299 239.98 47.9999C125.163 47.9998 32 141.163 32 256C32 370.837 125.163 464 240 464C328.156 463.994 406.741 408.441 436.153 325.338C439.101 317.008 434.739 307.865 426.408 304.917C418.078 301.969 408.935 306.331 405.987 314.662L405.228 316.764C379.767 385.921 313.851 431.995 239.999 432C142.837 432 64 353.163 64 256C64 158.837 142.837 79.9998 240 79.9998L241.443 80.004C288.554 80.332 333.541 99.583 366.293 133.422L367.029 134.188L377.001 145.789L326.1 196.69C316.02 206.77 323.16 224 337.42 224H448C456.837 224 464 216.837 464 208V97.42C464 83.16 446.77 76 436.69 86.1L399.693 123.097L390.748 112.692L389.287 111.167Z" fill="currentColor"/>
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
