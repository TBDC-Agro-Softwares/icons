<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M400 103.954C399.887 64.262 367.738 32.113 328.046 32.0001L112 32L110.678 32.0146C67.1394 32.8457 32.1291 68.2912 32.0001 111.953L32 328L32.013 329.19C32.7567 368.378 64.659 399.888 103.954 400L112 400V407C112 447.317 144.683 480 185 480H407C447.317 480 480 447.317 480 407V185C480 144.683 447.317 112 407 112H399.836L399.999 104.144L400 103.954ZM383.554 144H383.459H185C162.356 144 144 162.356 144 185V384V407C144 429.644 162.356 448 185 448H407C429.644 448 448 429.644 448 407V185C448 162.356 429.644 144 407 144H383.554ZM112 368V185C112 144.683 144.683 112 185 112H367.829L367.998 103.896L367.993 103.384C367.583 81.819 350.181 64.4169 328.66 64.0072L328 64L112.047 63.9999C85.809 64.0775 64.5081 85.1168 64.0087 111.208L64 112L63.9999 327.954C64.0622 349.824 81.599 367.579 103.34 367.993L104 368H112ZM296 200C304.731 200 311.829 206.994 311.997 215.685L312 216V280H376C384.837 280 392 287.163 392 296C392 304.731 385.006 311.829 376.315 311.997L376 312H312V376C312 384.837 304.837 392 296 392C287.269 392 280.171 385.006 280.003 376.315L280 376V312H216C207.163 312 200 304.837 200 296C200 287.269 206.994 280.171 215.685 280.003L216 280H280V216C280 207.163 287.163 200 296 200Z" fill="currentColor"/>
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
