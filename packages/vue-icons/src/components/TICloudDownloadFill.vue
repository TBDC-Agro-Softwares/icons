<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M424.62 171.57C442.87 174.94 459.44 181.07 472.7 189.5C498.41 205.83 512 230.35 512 260.4C512 317.76 468.64 352 396 352H272V224C272 219.623 270.206 215.438 267.038 212.418C263.869 209.399 259.602 207.809 255.23 208.02C246.62 208.45 240 215.84 240 224.45V352H136C55.93 352 0 305 0 237.6C0 203.56 13.7 174.83 39.59 154.5C57.47 140.48 80.87 130.7 108 125.8C113.116 124.878 117.469 121.535 119.68 116.83C129.475 96.2657 143.82 78.1997 161.63 64C188 43.08 220.65 32 256 32C296.21 32 334.15 46.45 362.85 72.7C387.4 95.15 404.14 124.77 412 159.28C413.37 165.532 418.334 170.366 424.62 171.57ZM240 352V425.42L203.3 388.78C197.02 382.694 187.016 382.778 180.839 388.969C174.662 395.159 174.6 405.163 180.7 411.43L244.7 475.32C250.945 481.55 261.055 481.55 267.3 475.32L331.3 411.43C337.4 405.163 337.338 395.159 331.161 388.969C324.984 382.778 314.98 382.694 308.7 388.78L272 425.42V352H240Z" fill="currentColor"/>
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
