<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M241 191.66V16L449 112L273 202.3V320C314.76 322.4 354.86 334.15 387.29 353.7C428.91 378.76 455.37 414.65 463.91 457.5C465.87 467.31 464.59 496 464.59 496H49.3804C49.3804 496 48.0604 467.31 50.0604 457.5C58.6004 414.65 85.0904 378.76 126.68 353.7C159.11 334.15 199.21 322.4 241 320V192.36V191.66ZM241 320.47V415.79H273V320.47C267.667 320.157 262.334 320 257 320C251.667 320 246.334 320.157 241 320.47Z" fill="currentColor"/>
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
