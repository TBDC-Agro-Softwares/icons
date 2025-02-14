<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C10.3578 0 8.79273 0.329854 7.36731 0.926921L8.98742 2.46176C9.93811 2.16178 10.9502 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.9058 2.17575 9.85261 2.50055 8.86718L0.960018 7.28907C0.342056 8.73539 0 10.3277 0 12C0 18.6274 5.37258 24 12 24Z"
    fill="currentColor" />
  <path
    d="M4.29699 9.21875C3.98343 10.0871 3.8125 11.0236 3.8125 12C3.8125 16.5218 7.47817 20.1875 12 20.1875C16.5218 20.1875 20.1875 16.5218 20.1875 12C20.1875 7.47817 16.5218 3.8125 12 3.8125C11.0754 3.8125 10.1866 3.96577 9.35756 4.24828L10.0858 6.11429C10.6885 5.91839 11.3319 5.8125 12 5.8125C15.4173 5.8125 18.1875 8.58274 18.1875 12C18.1875 15.4173 15.4173 18.1875 12 18.1875C8.58274 18.1875 5.8125 15.4173 5.8125 12C5.8125 11.385 5.90223 10.7909 6.0693 10.2302L5.1875 9.21875H4.29699Z"
    fill="currentColor" />
  <path
    d="M7.375 12C7.375 11.7391 7.39661 11.4832 7.43814 11.234L9.71511 13.2932C10.1662 14.0884 11.0204 14.625 12 14.625C13.4497 14.625 14.625 13.4497 14.625 12C14.625 11.1523 14.2232 10.3985 13.5997 9.91858L11.6477 7.38822C11.764 7.37946 11.8815 7.375 12 7.375C14.5543 7.375 16.625 9.44568 16.625 12C16.625 14.5543 14.5543 16.625 12 16.625C9.44568 16.625 7.375 14.5543 7.375 12Z"
    fill="currentColor" />
  <path
    d="M1.375 1.3125L2.03125 0.96875L3.65625 2.46875L3.8125 1.15625L4.78125 0.96875L7.5 3.9375V6.3125L12.9375 11.6562V12.4688L12.4688 12.6875L11.6875 12.875L6.21875 7.40625H3.65625L0.96875 4.71875L1.1875 3.75H2.6875L0.96875 2.125L1.375 1.3125Z"
    fill="currentColor" />
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
