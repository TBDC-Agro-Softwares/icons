<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="510" viewBox="0 0 512 510" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M290.133 199.58C326.4 205.945 358.4 218.676 388.267 242.016L448 180.484V329.01H298.667L356.267 271.721C277.333 214.432 168.533 233.529 113.067 312.035C108.8 318.401 104.533 322.644 102.4 329.01L64 309.913C108.8 229.285 198.4 184.727 290.133 199.58Z" fill="currentColor"/>
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
