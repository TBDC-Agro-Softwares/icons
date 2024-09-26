<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M385.001 32C362.998 32.0036 342.54 43.3092 330.83 61.9363C319.119 80.5634 317.798 103.9 327.331 123.73L256.501 204.55L186.311 124.45C199.022 98.836 193.2 67.8978 172.047 48.6567C150.895 29.4156 119.545 26.5407 95.2456 41.6138C70.9464 56.6869 59.5943 86.0501 67.4349 113.549C75.2756 141.047 100.406 160.008 129.001 160C130.101 160 131.201 160 132.291 159.92L225.001 265.7V360.61C199.915 375.093 187.684 404.62 195.182 432.6C202.679 460.58 228.034 480.036 257.001 480.036C285.968 480.036 311.323 460.58 318.82 432.6C326.317 404.62 314.087 375.093 289.001 360.61V264.56L380.781 159.85C382.171 159.94 383.581 160 385.001 160C420.347 160 449.001 131.346 449.001 96C449.001 60.6538 420.347 32 385.001 32ZM97.0008 96C97.0008 78.3269 111.328 64 129.001 64C146.674 64 161.001 78.3269 161.001 96C161.001 113.673 146.674 128 129.001 128C111.328 128 97.0008 113.673 97.0008 96ZM257.001 448C239.328 448 225.001 433.673 225.001 416C225.001 398.327 239.328 384 257.001 384C274.674 384 289.001 398.327 289.001 416C289.001 433.673 274.674 448 257.001 448ZM385.001 128C367.328 128 353.001 113.673 353.001 96C353.001 78.3269 367.328 64 385.001 64C402.674 64 417.001 78.3269 417.001 96C417.001 104.487 413.629 112.626 407.628 118.627C401.627 124.629 393.488 128 385.001 128Z" fill="currentColor"/>
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
