<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M79.2 211.44C94.72 202.62 114.11 209.16 122.51 225.12L163.89 309.53C165.499 312.846 169.405 314.346 172.82 312.96C175.488 311.897 177.237 309.312 177.23 306.44V72C177.23 58.09 190.08 48 204 48C217.92 48 230 58.09 230 72V228.64C229.93 234.723 234.712 239.757 240.79 240C243.744 240.056 246.596 238.922 248.704 236.853C250.813 234.784 252.001 231.954 252 229V24C252 10.09 262.94 0 276.86 0C290.78 0 302 10.09 302 24V228.64C301.93 234.723 306.712 239.757 312.79 240C315.744 240.056 318.596 238.922 320.704 236.853C322.813 234.784 324.001 231.954 324 229V56C324 42.09 336.08 32 350 32C363.92 32 376 43.09 376 57V244.64C375.93 250.723 380.712 255.757 386.79 256C389.744 256.056 392.596 254.922 394.704 252.853C396.813 250.784 398.001 247.954 398 245V120C398 106.09 409.08 96 423 96C436.92 96 448.12 106.22 448 120V336C448 453.41 376 512 288 512H272C184 512 156.29 472.4 136 424L67.33 255C60.67 237 63.69 220.25 79.2 211.44Z" fill="currentColor"/>
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
