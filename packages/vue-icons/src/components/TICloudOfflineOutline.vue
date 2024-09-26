<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M75.0511 52.4296C68.7847 46.4391 58.8479 46.5247 52.6863 52.6863C46.4379 58.9347 46.4379 69.0653 52.6863 75.3137L436.686 459.314L436.949 459.57C443.215 465.561 453.152 465.475 459.314 459.314C465.562 453.065 465.562 442.935 459.314 436.686L75.3137 52.6863L75.0511 52.4296ZM256 64C336.008 64 399.857 121.627 414.091 208.469L414.232 209.365L415.001 209.482C436.17 212.745 456.705 220.803 473.161 233.18L473.844 233.698C498.108 252.253 512 279.045 512 312C512 345.025 500.085 371.777 478.031 390.058C471.228 395.698 461.141 394.754 455.502 387.951C449.939 381.24 450.782 371.333 457.336 365.653L457.609 365.422C472.138 353.378 480 335.726 480 312C480 289.25 470.927 271.751 454.406 259.117C439.623 247.813 419.322 241.028 399.168 239.978C391.386 239.573 385.046 233.625 384.116 225.922L384.078 225.581C376.274 146.977 323.332 96 256 96C233.892 96 213.944 101.543 196.591 111.884C189 116.408 179.179 113.922 174.656 106.331C170.132 98.7403 172.618 88.9195 180.209 84.3957C202.495 71.1141 228.099 64 256 64ZM88.6429 168.077C97.0227 165.273 106.089 169.793 108.893 178.173C111.697 186.553 107.177 195.619 98.7971 198.423C56.9987 212.409 32 243.835 32 288C32 342.731 75.9474 383.184 134.23 383.988L136 384H320.37C329.207 384 336.37 391.163 336.37 400C336.37 408.731 329.376 415.829 320.685 415.997L320.37 416H136C59.8185 416 0 361.682 0 288C0 229.415 34.3392 186.248 88.6429 168.077Z" fill="currentColor"/>
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
