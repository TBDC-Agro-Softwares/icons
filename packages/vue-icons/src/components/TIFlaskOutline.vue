<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M304 33H336C344.837 33 352 40.1634 352 49C352 57.7314 345.006 64.8292 336.315 64.997L336 65H320V142.482C319.999 151.343 322.446 160.027 327.057 167.568L327.399 168.117L452.319 365.947C483.539 415.389 448.685 479.699 390.685 480.981L388.92 481H123.08C64.6164 481 28.8659 417.184 58.7552 367.451L59.6811 365.948L184.587 168.125C189.313 160.63 191.875 151.978 191.996 143.128L192 142.48V65H176C167.163 65 160 57.8366 160 49C160 40.2686 166.994 33.1708 175.685 33.003L176 33H208H304ZM224 65V142.482C223.998 157.334 219.867 171.888 212.07 184.527L211.649 185.202L146.111 289H365.884L300.334 185.191C292.416 172.627 288.149 158.113 288.004 143.275L288 142.48V65H224ZM386.091 321H125.906L86.7386 383.033C68.8377 411.381 88.8212 448.254 122.068 448.989L123.08 449H388.92C422.433 449 442.93 412.41 425.792 383.894L425.261 383.033L386.091 321Z" fill="currentColor"/>
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
