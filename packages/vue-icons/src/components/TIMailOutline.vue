<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M424 80H88C57.0721 80 32 105.072 32 136V376C32 406.928 57.0721 432 88 432H424C454.928 432 480 406.928 480 376V136C480 105.072 454.928 80 424 80ZM88 112H424C437.255 112 448 122.745 448 136V376C448 389.255 437.255 400 424 400H88C74.7452 400 64 389.255 64 376V136C64 122.745 74.7452 112 88 112ZM412.63 150.177C407.205 143.202 397.152 141.945 390.177 147.37L256 251.73L121.823 147.37L121.542 147.157C114.581 141.98 104.723 143.295 99.3704 150.177C93.9452 157.152 95.2018 167.205 102.177 172.63L246.177 284.63L246.478 284.858C252.233 289.122 260.145 289.046 265.823 284.63L409.823 172.63L410.099 172.41C416.831 166.937 417.982 157.059 412.63 150.177Z" fill="currentColor"/>
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
