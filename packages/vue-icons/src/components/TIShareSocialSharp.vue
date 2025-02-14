<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M379.001 324C360.747 323.994 343.217 331.142 330.171 343.91L203.001 272.41C205.614 261.626 205.614 250.374 203.001 239.59L330.131 168.09C354.663 191.952 392.883 194.495 420.36 174.093C447.836 153.69 456.455 116.369 440.707 85.984C424.959 55.5992 389.495 41.1255 356.984 51.8144C324.472 62.5034 304.516 95.1982 309.871 129L179.741 202.2C151.302 178.506 109.332 181.048 83.9615 208.002C58.591 234.956 58.591 277.003 83.9615 303.958C109.332 330.912 151.302 333.454 179.741 309.76L309.871 383C305.264 411.956 319.191 440.716 344.765 455.056C370.34 469.397 402.141 466.279 424.444 447.245C446.746 428.21 454.823 397.293 444.679 369.783C434.536 342.273 408.322 324 379.001 324Z" fill="currentColor"/>
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
