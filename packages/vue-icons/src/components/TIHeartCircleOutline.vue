<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 48C141.163 48 48 141.163 48 256C48 370.837 141.163 464 256 464C370.837 464 464 370.837 464 256C464 141.163 370.837 48 256 48ZM256 80C353.163 80 432 158.837 432 256C432 353.163 353.163 432 256 432C158.837 432 80 353.163 80 256C80 158.837 158.837 80 256 80ZM247 357.22C249.653 359.029 252.789 359.997 256 360C259.204 359.993 262.333 359.025 264.98 357.22C304.28 330.54 321.3 312.25 330.68 300.81C350.67 276.44 360.26 251.41 359.98 224.31C359.67 193.25 334.76 167.98 304.45 167.98C284.05 167.98 269.46 178.61 260.35 188.39C259.217 189.589 257.64 190.268 255.99 190.268C254.34 190.268 252.763 189.589 251.63 188.39C242.53 178.61 227.93 167.98 207.53 167.98C177.22 167.98 152.31 193.25 152 224.31C151.72 251.41 161.3 276.44 181.3 300.81C190.68 312.22 207.7 330.54 247 357.22Z" fill="currentColor"/>
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
