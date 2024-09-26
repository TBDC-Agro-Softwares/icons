<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M281.79 411.5C285.903 414.543 290.884 416.187 296 416.19V416.17C309.255 416.17 320 405.425 320 392.17V119.83C320.005 110.775 314.914 102.488 306.834 98.4007C298.754 94.3132 289.062 95.1212 281.77 100.49L281.11 101L189.65 176H120C106.745 176 96 186.745 96 200V311.99C96 325.245 106.745 335.99 120 335.99H189.67L281.13 410.99L281.79 411.5ZM370.389 328.396C373.3 333.12 378.451 335.997 384 336C390.051 336.001 395.585 332.587 398.3 327.18C410 303.78 416 279.83 416 256C416 231.47 410.2 208.16 398.26 184.73C394.155 177.033 384.641 174.042 376.871 178.007C369.101 181.971 365.938 191.429 369.76 199.27C379.35 218.08 384.01 236.64 384.01 256C384.01 274.82 379.2 293.92 369.71 312.82C367.22 317.779 367.477 323.673 370.389 328.396Z" fill="currentColor"/>
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
