<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M82.4206 209.08C97.4806 202.46 114.801 210.39 120.921 226.7L156.001 312H167.271V80C167.271 62.4 180.571 48 196.821 48C213.081 48 226.371 62.4 226.371 80V231.75L241.151 232V32C241.151 14.4 254.451 0 270.701 0C287.001 0 300.251 14.4 300.251 32V231.75L315.001 232V64C315.001 46.4 328.301 32 344.551 32C360.811 32 374.101 46.4 374.101 64V247.75L388.881 248V128C388.881 110.4 402.181 96 418.431 96C434.701 96 448.001 110.4 448.001 128V344C448.001 419.8 410.871 512 279.001 512C238.201 512 199.581 505 178.341 491C165.021 482.22 153.563 470.901 144.621 457.69C137.938 447.831 132.56 437.149 128.621 425.91L66.1606 250.77C60.0506 234.46 67.3606 215.71 82.4206 209.08Z" fill="currentColor"/>
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
