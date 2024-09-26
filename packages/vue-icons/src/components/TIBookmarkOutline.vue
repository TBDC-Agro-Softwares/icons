<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M352 32H160C124.654 32 96 60.6538 96 96V464L96.0049 464.412C96.3256 477.95 112.415 485.039 122.63 475.959L256 357.406L389.37 475.959C399.689 485.13 416 477.806 416 464V96C416 60.6538 387.346 32 352 32ZM352 64L352.529 64.0043C369.958 64.2869 384 78.5036 384 96V428.371L266.63 324.041L266.348 323.797C260.287 318.654 251.339 318.736 245.37 324.041L128 428.37V96C128 78.3269 142.327 64 160 64H352Z" fill="currentColor"/>
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
