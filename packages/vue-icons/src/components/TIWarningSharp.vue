<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M473.225 447.339L262.655 56.2095C261.26 53.6169 258.554 52 255.61 52C252.666 52 249.96 53.6169 248.565 56.2095L37.9547 447.339C36.6206 449.819 36.6887 452.818 38.1339 455.235C39.5791 457.652 42.1887 459.131 45.0047 459.129H466.225C469.032 459.114 471.625 457.628 473.058 455.214C474.492 452.8 474.555 449.812 473.225 447.339ZM275.605 411.049H235.605V371.049H275.605V411.049ZM271.605 347.129H239.605L233.605 187.129H277.605L271.605 347.129Z" fill="currentColor"/>
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
