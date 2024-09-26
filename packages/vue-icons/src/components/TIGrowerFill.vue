<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M186.115 102.808C196.105 66.225 223.174 40 255 40C286.782 40 313.82 66.1524 323.843 102.656C376.03 110.195 412 126.1 412 144.5C412 161.404 381.641 176.202 336.24 184.342C350.643 259.148 294.027 305 255.5 305H255.252C216.711 305 159.862 259.114 174.295 184.258C129.151 176.101 98.9999 161.347 98.9999 144.5C98.9999 126.222 134.492 110.408 186.115 102.808Z" fill="currentColor"/>
<path d="M441.97 429.345C455.249 448.251 440.07 472.001 416.965 472.001H94.0343C70.9302 472.001 55.7507 448.251 69.0298 429.345C111.287 369.179 179.077 330.18 255.5 330.18C331.923 330.18 399.713 369.179 441.97 429.345Z" fill="currentColor"/>
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
