<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M255.981 176C211.798 176 175.981 211.817 175.981 256C175.981 300.183 211.798 336 255.981 336C300.164 336 335.981 300.183 335.981 256C335.849 211.872 300.109 176.132 255.981 176ZM428.701 256C428.66 263.475 428.112 270.939 427.061 278.34L475.751 316.46C480.131 320.077 481.245 326.334 478.381 331.24L432.321 410.76C429.431 415.619 423.466 417.699 418.181 415.69L360.931 392.69C349.01 401.87 335.964 409.488 322.111 415.36L313.551 476.14C312.563 481.755 307.741 485.886 302.041 486H209.921C204.333 485.891 199.561 481.939 198.411 476.47L189.851 415.69C175.96 409.886 162.905 402.256 151.031 393L93.7812 416C88.4985 418.011 82.5347 415.936 79.6412 411.08L33.5812 331.57C30.7177 326.664 31.8312 320.407 36.2112 316.79L84.9012 278.67C83.8627 271.157 83.3148 263.584 83.2612 256C83.3028 248.525 83.8507 241.061 84.9012 233.66L36.2112 195.54C31.8312 191.923 30.7177 185.666 33.5812 180.76L79.6412 101.24C82.5316 96.3805 88.4961 94.301 93.7812 96.31L151.031 119.31C162.952 110.13 175.998 102.512 189.851 96.64L198.411 35.86C199.399 30.2454 204.221 26.1144 209.921 26H302.041C307.629 26.1088 312.402 30.0606 313.551 35.53L322.111 96.31C336.02 102.11 349.092 109.74 360.981 119L418.181 96C423.464 93.9892 429.428 96.0643 432.321 100.92L478.381 180.44C481.245 185.346 480.131 191.603 475.751 195.22L427.061 233.34C428.099 240.85 428.647 248.419 428.701 256Z" fill="currentColor"/>
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
