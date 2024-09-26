<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="510" viewBox="0 0 512 510" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M221.867 199.58C185.6 205.945 153.6 218.676 123.733 242.016L64 180.484V329.01H213.333L155.733 271.721C234.667 216.554 343.467 233.529 401.067 312.035C405.333 318.401 409.6 322.644 411.733 329.01L450.133 309.913C403.2 229.285 313.6 184.727 221.867 199.58Z" fill="currentColor"/>
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
