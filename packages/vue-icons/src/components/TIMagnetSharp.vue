<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M328.379 40C366.586 40.0131 403.221 55.2094 430.22 82.2433C486.55 138.643 485.55 230.423 429.18 286.793L362.27 353.703L294.39 285.823L361.71 218.503C380.33 199.883 381.15 169.563 362.85 150.643C353.905 141.385 341.616 136.108 328.744 135.997C315.871 135.886 303.493 140.951 294.39 150.053L226.51 217.943L158.63 150.053L226.51 82.1733C253.527 55.158 290.173 39.9869 328.379 40ZM120 296.003V328.003H40V296.003H120ZM154.747 379.883L132.12 357.256L75.5526 413.823L98.18 436.451L154.747 379.883ZM216 472.003V392.003H184V472.003H216ZM90.7385 217.941L135.993 172.686L203.876 240.568L158.621 285.823L90.7385 217.941ZM271.764 308.439L226.509 353.694L294.391 421.576L339.646 376.321L271.764 308.439Z" fill="currentColor"/>
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
