<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M224.036 96.5311C223.172 78.9031 238.109 64.2978 255.498 64.0045L256.031 64C273.739 64 289.058 78.8773 288.012 96.8103L280.028 312.397C279.818 325.337 269.368 335.787 256.428 335.997L256.031 336L255.538 335.994L254.913 335.974C242.401 335.396 232.441 325.272 232.043 312.776L232.035 312.396L224.047 96.715L224.036 96.5311ZM224.031 416C224.031 398.327 238.358 384 256.031 384C273.704 384 288.031 398.327 288.031 416C288.031 433.673 273.704 448 256.031 448C238.358 448 224.031 433.673 224.031 416Z" fill="currentColor"/>
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
