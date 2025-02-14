<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M250.855 192H293.522L246.589 405.333H203.922L250.855 192ZM286.695 106.667C282.476 106.667 278.351 107.918 274.843 110.262C271.335 112.606 268.6 115.938 266.986 119.836C265.371 123.734 264.949 128.024 265.772 132.162C266.595 136.3 268.627 140.102 271.61 143.085C274.594 146.069 278.395 148.1 282.533 148.924C286.672 149.747 290.961 149.324 294.859 147.71C298.757 146.095 302.089 143.36 304.433 139.852C306.777 136.344 308.028 132.219 308.028 128C308.028 122.342 305.781 116.916 301.78 112.915C297.779 108.914 292.353 106.667 286.695 106.667Z" fill="currentColor"/>
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
