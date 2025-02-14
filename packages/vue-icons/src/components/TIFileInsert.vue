<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M279.335 346.635H232.668C224.918 346.635 218.668 339.052 218.668 329.635V210.635H167.501C157.168 210.635 151.918 195.385 159.251 186.469L248.001 78.6355C252.418 73.3855 259.585 73.3855 263.918 78.6355L352.751 186.469C360.085 195.385 354.835 210.635 344.501 210.635H293.335V329.635C293.335 339.052 287.085 346.635 279.335 346.635ZM405.335 340.969V420.302C405.335 429.719 399.085 437.302 391.335 437.302H120.668C112.918 437.302 106.668 429.719 106.668 420.302V340.969C106.668 331.552 112.918 323.969 120.668 323.969H200.001V329.635C200.001 351.552 214.668 369.302 232.668 369.302H279.335C297.335 369.302 312.001 351.552 312.001 329.635V323.969H391.335C399.085 323.969 405.335 331.552 405.335 340.969ZM333.001 403.302C333.001 395.469 327.751 389.136 321.335 389.136C314.918 389.136 309.668 395.469 309.668 403.302C309.668 411.136 314.918 417.469 321.335 417.469C327.751 417.469 333.001 411.136 333.001 403.302ZM370.335 403.302C370.335 395.469 365.085 389.136 358.668 389.136C352.251 389.136 347.001 395.469 347.001 403.302C347.001 411.136 352.251 417.469 358.668 417.469C365.085 417.469 370.335 411.136 370.335 403.302Z" fill="currentColor"/>
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
