<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M255.999 448C249.576 447.992 243.304 446.051 237.999 442.43C159.409 389.08 125.379 352.5 106.609 329.63C66.6094 280.88 47.4594 230.83 47.9994 176.63C48.6294 114.52 98.4594 64 159.079 64C203.159 64 233.689 88.83 251.469 109.51C252.609 110.822 254.261 111.576 255.999 111.576C257.737 111.576 259.39 110.822 260.529 109.51C278.309 88.81 308.839 64 352.919 64C413.539 64 463.369 114.52 463.999 176.64C464.539 230.85 445.369 280.9 405.389 329.64C386.619 352.51 352.589 389.09 273.999 442.44C268.693 446.058 262.421 447.995 255.999 448Z" fill="currentColor"/>
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
