<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.11111 13.1111H9.77778C10.0725 13.1111 10.3551 12.994 10.5635 12.7857C10.7718 12.5773 10.8889 12.2947 10.8889 12V3.11111C10.8889 2.81643 10.7718 2.53381 10.5635 2.32544C10.3551 2.11706 10.0725 2 9.77778 2H3.11111C2.81643 2 2.53381 2.11706 2.32544 2.32544C2.11706 2.53381 2 2.81643 2 3.11111V12C2 12.2947 2.11706 12.5773 2.32544 12.7857C2.53381 12.994 2.81643 13.1111 3.11111 13.1111ZM2 20.8889C2 21.1836 2.11706 21.4662 2.32544 21.6746C2.53381 21.8829 2.81643 22 3.11111 22H9.77778C10.0725 22 10.3551 21.8829 10.5635 21.6746C10.7718 21.4662 10.8889 21.1836 10.8889 20.8889V16.4444C10.8889 16.1498 10.7718 15.8671 10.5635 15.6588C10.3551 15.4504 10.0725 15.3333 9.77778 15.3333H3.11111C2.81643 15.3333 2.53381 15.4504 2.32544 15.6588C2.11706 15.8671 2 16.1498 2 16.4444V20.8889ZM13.1111 20.8889C13.1111 21.1836 13.2282 21.4662 13.4365 21.6746C13.6449 21.8829 13.9275 22 14.2222 22H20.8889C21.1836 22 21.4662 21.8829 21.6746 21.6746C21.8829 21.4662 22 21.1836 22 20.8889V13.1111C22 12.8164 21.8829 12.5338 21.6746 12.3254C21.4662 12.1171 21.1836 12 20.8889 12H14.2222C13.9275 12 13.6449 12.1171 13.4365 12.3254C13.2282 12.5338 13.1111 12.8164 13.1111 13.1111V20.8889ZM14.2222 9.77778H20.8889C21.1836 9.77778 21.4662 9.66071 21.6746 9.45234C21.8829 9.24397 22 8.96135 22 8.66667V3.11111C22 2.81643 21.8829 2.53381 21.6746 2.32544C21.4662 2.11706 21.1836 2 20.8889 2H14.2222C13.9275 2 13.6449 2.11706 13.4365 2.32544C13.2282 2.53381 13.1111 2.81643 13.1111 3.11111V8.66667C13.1111 8.96135 13.2282 9.24397 13.4365 9.45234C13.6449 9.66071 13.9275 9.77778 14.2222 9.77778Z" fill="currentColor"/>
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
