<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M368 65C376.837 65 384 72.1634 384 81C384 89.7314 377.006 96.8292 368.315 96.997L368 97H144C135.163 97 128 89.8366 128 81C128 72.2686 134.994 65.1708 143.685 65.003L144 65H368ZM92.87 161H419.13C443.911 161 464 181.089 464 205.87V404.13C464 428.911 443.911 449 419.13 449H92.87C68.089 449 48 428.911 48 404.13V205.87C48 181.089 68.089 161 92.87 161ZM419.13 193H92.87C85.7621 193 80 198.762 80 205.87V404.13C80 411.238 85.7621 417 92.87 417H419.13C426.238 417 432 411.238 432 404.13V205.87C432 198.762 426.238 193 419.13 193ZM416 129C416 120.163 408.837 113 400 113H112L111.685 113.003C102.994 113.171 96 120.269 96 129C96 137.837 103.163 145 112 145H400L400.315 144.997C409.006 144.829 416 137.731 416 129Z" fill="currentColor"/>
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
