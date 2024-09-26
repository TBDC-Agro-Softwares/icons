<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M368 96H144C135.163 96 128 88.8366 128 80C128 71.1634 135.163 64 144 64H368C376.837 64 384 71.1634 384 80C384 88.8366 376.837 96 368 96ZM400 144H112C103.163 144 96 136.837 96 128C96 119.163 103.163 112 112 112H400C408.837 112 416 119.163 416 128C416 136.837 408.837 144 400 144ZM92.87 448H419.13C443.9 447.972 463.972 427.9 464 403.13V204.87C463.972 180.1 443.9 160.028 419.13 160H92.87C68.1004 160.028 48.0276 180.1 48 204.87V403.13C48.0276 427.9 68.1004 447.972 92.87 448Z" fill="currentColor"/>
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
