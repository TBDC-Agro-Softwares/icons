<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M381.25 111.986C374.465 92.8152 356.336 80 336 80C315.664 80 297.535 92.8152 290.75 111.986H48V143.986H290.75C297.535 163.158 315.664 175.973 336 175.973C356.336 175.973 374.465 163.158 381.25 143.986H464V111.986H381.25ZM176 207.986C155.669 208.015 137.552 220.827 130.75 239.986H48V271.986H130.75C137.535 291.158 155.664 303.973 176 303.973C196.336 303.973 214.465 291.158 221.25 271.986H464V239.986H221.25C214.448 220.827 196.331 208.015 176 207.986ZM290.75 367.986C297.552 348.827 315.669 336.015 336 335.986C356.331 336.015 374.448 348.827 381.25 367.986H464V399.986H381.25C374.465 419.158 356.336 431.973 336 431.973C315.664 431.973 297.535 419.158 290.75 399.986H48V367.986H290.75Z" fill="currentColor"/>
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
