<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M224.004 96.5311C223.141 78.9031 238.078 64.2978 255.467 64.0045L256 64C273.707 64 289.027 78.8773 287.98 96.8103L279.997 312.397C279.787 325.337 269.337 335.787 256.397 335.997L256 336L255.506 335.994L254.882 335.974C242.37 335.396 232.409 325.272 232.012 312.776L232.004 312.396L224.016 96.715L224.004 96.5311ZM224 416C224 398.327 238.327 384 256 384C273.673 384 288 398.327 288 416C288 433.673 273.673 448 256 448C238.327 448 224 433.673 224 416Z" fill="currentColor"/>
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
