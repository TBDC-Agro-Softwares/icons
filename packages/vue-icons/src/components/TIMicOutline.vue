<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256.08 48.002C234.809 47.8958 214.378 56.2985 199.337 71.3395C184.494 86.1821 176.11 106.28 176 127.265L175.999 239.003C175.999 283.09 212.211 320.003 256 320.003C300.029 320.003 336 283.645 336 239.003V128.003C336 83.6143 301.536 48.706 257.342 48.0123L256.08 48.002ZM255.92 80.0016L256 80.0018C283.163 80.0018 304 100.839 304 128.003V239.003C304 266.048 282.279 288.003 256 288.003C230.023 288.003 207.999 265.553 207.999 239.003L207.999 127.349C208.065 114.876 213.083 102.849 221.964 93.9669C230.965 84.9664 243.191 79.938 255.92 80.0016ZM399.997 207.688C399.829 198.996 392.731 192.003 384 192.003C375.163 192.003 368 199.166 368 208.003V240.003L367.985 241.846C366.99 302.57 316.948 352.003 256 352.003C194.437 352.003 144 301.566 144 240.003V208.003L143.997 207.688C143.829 198.996 136.731 192.003 128 192.003C119.163 192.003 112 199.166 112 208.003V240.003L112.019 242.375C113.209 315.142 168.998 375.184 240 383.114V432.003H192L191.685 432.006C182.994 432.173 176 439.271 176 448.003C176 456.839 183.163 464.003 192 464.003H256H320L320.315 464C329.006 463.832 336 456.734 336 448.003C336 439.166 328.837 432.003 320 432.003H272V383.114C343.772 375.098 400 313.833 400 240.003V208.003L399.997 207.688Z" fill="currentColor"/>
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
