<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M208 32H176V112H208V32ZM67.624 90.2494L90.2514 67.622L146.82 124.191L124.193 146.818L67.624 90.2494ZM133.441 200.647L200.638 133.451L278.78 211.593L211.584 278.789L133.441 200.647ZM301.41 234.21L234.22 301.41L412 480L480 412L301.41 234.21ZM112 176H32V208H112V176ZM237.32 124.195L293.889 67.626L316.516 90.2534L259.947 146.822L237.32 124.195ZM124.189 237.318L67.62 293.887L90.2474 316.514L146.816 259.945L124.189 237.318Z" fill="currentColor"/>
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
