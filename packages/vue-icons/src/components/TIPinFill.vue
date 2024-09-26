<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M337 96C336.997 53.9007 304.366 19.0075 262.361 16.1862C220.357 13.3648 183.353 43.5808 177.719 85.3016C172.086 127.022 199.751 165.97 241 174.39V457.56C241.002 461.811 241.848 466.019 243.49 469.94L253.56 493.94C254.247 495.198 255.566 495.98 257 495.98C258.433 495.98 259.753 495.198 260.44 493.94L270.51 469.94C272.152 466.019 272.998 461.811 273 457.56V174.39C310.222 166.741 336.953 134 337 96ZM281 96C267.745 96 257 85.2548 257 72C257 58.7452 267.745 48 281 48C294.255 48 305 58.7452 305 72C305 78.3652 302.471 84.4697 297.97 88.9706C293.47 93.4714 287.365 96 281 96Z" fill="currentColor"/>
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
