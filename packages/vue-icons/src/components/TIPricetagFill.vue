<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M466.999 45.2C458.625 36.7289 447.201 31.9734 435.289 32H312.359C304.295 32.015 296.563 35.2094 290.839 40.89L45.0891 286.59C27.6291 304.086 27.6291 332.414 45.0891 349.91L162.089 466.91C179.59 484.378 207.929 484.378 225.429 466.91L471.079 221.31C476.771 215.596 479.977 207.865 479.999 199.8V76.8C480.073 64.9507 475.39 53.5673 466.999 45.2ZM383.999 160C366.326 160 351.999 145.673 351.999 128C351.999 110.327 366.326 96 383.999 96C401.672 96 415.999 110.327 415.999 128C415.999 136.487 412.628 144.626 406.627 150.627C400.625 156.629 392.486 160 383.999 160Z" fill="currentColor"/>
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
