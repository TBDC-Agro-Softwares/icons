<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9205 4.4545C13.4812 4.01517 12.7688 4.01517 12.3295 4.4545C11.8947 4.88932 11.8902 5.5915 12.3161 6.03182L12.3295 6.0455L18.284 12L12.3295 17.9545C11.8947 18.3893 11.8902 19.0915 12.3161 19.5318L12.3295 19.5455C12.7643 19.9803 13.4665 19.9848 13.9068 19.5589L13.9205 19.5455L20.6705 12.7955C21.1053 12.3607 21.1098 11.6585 20.6839 11.2182L20.6705 11.2045L13.9205 4.4545Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.9205 4.4545C4.48116 4.01517 3.76884 4.01517 3.32951 4.4545C2.8947 4.88932 2.89021 5.5915 3.31606 6.03182L3.32951 6.0455L9.28402 12L3.32951 17.9545C2.8947 18.3893 2.89021 19.0915 3.31606 19.5318L3.32951 19.5455C3.76432 19.9803 4.4665 19.9848 4.90682 19.5589L4.9205 19.5455L11.6705 12.7955C12.1053 12.3607 12.1098 11.6585 11.6839 11.2182L11.6705 11.2045L4.9205 4.4545Z" fill="currentColor"/>
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
