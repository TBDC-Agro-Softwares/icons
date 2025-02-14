<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M63.998 86.0044L85.9961 64.0063L447.999 426.01L426.001 448.008L63.998 86.0044ZM259.34 192.09L319.91 252.66C318.167 219.957 292.043 193.833 259.34 192.09ZM252.66 319.91L192.09 259.34C193.833 292.043 219.957 318.167 252.66 319.91ZM256 352C226.064 352.001 197.841 338.038 179.679 314.24C161.518 290.442 155.498 259.534 163.4 230.66L94.33 161.58C66.12 187.42 39.24 221.14 16 256C42.42 300 78.56 345.24 116.2 371.18C159.38 400.92 206.33 416 255.76 416C282.773 416.019 309.584 411.349 335 402.2L281.39 348.6C273.117 350.864 264.577 352.008 256 352ZM332.321 197.76C314.159 173.962 285.936 159.999 256 160C247.439 159.997 238.917 161.14 230.66 163.4L177.55 110.29C202.553 100.879 229.044 96.0383 255.76 96C304.31 96 351.1 111.2 394.82 141.18C433.1 167.44 469.62 212.57 496 256C475.33 290.44 448.41 325.75 419.26 352L348.6 281.34C356.502 252.466 350.482 221.558 332.321 197.76Z" fill="currentColor"/>
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
