<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M221.091 48C125.495 48 48 125.495 48 221.09C48 316.685 125.495 394.18 221.09 394.18C263.126 394.18 301.662 379.195 331.649 354.276L436.686 459.314L436.949 459.57C443.215 465.561 453.152 465.475 459.314 459.314C465.562 453.065 465.562 442.935 459.314 436.686L354.276 331.649C379.195 301.662 394.18 263.126 394.18 221.09C394.174 125.497 316.683 48.0061 221.091 48ZM221.089 80C299.009 80.005 362.175 143.171 362.18 221.091C362.18 299.012 299.012 362.18 221.09 362.18C143.168 362.18 80 299.012 80 221.09C80 143.168 143.168 80 221.089 80Z" fill="currentColor"/>
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
