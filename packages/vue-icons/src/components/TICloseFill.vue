<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M289.941 256L384.941 161C394.329 151.628 394.343 136.419 384.971 127.03C375.598 117.641 360.389 117.628 351.001 127L256.001 222L161.001 127C151.612 117.611 136.389 117.611 127.001 127C117.612 136.389 117.612 151.611 127.001 161L222.001 256L127.001 351C117.612 360.389 117.612 375.611 127.001 385C136.389 394.389 151.612 394.389 161.001 385L256.001 290L351.001 385C360.389 394.389 375.612 394.389 385.001 385C394.389 375.611 394.389 360.389 385.001 351L289.941 256Z" fill="currentColor"/>
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
