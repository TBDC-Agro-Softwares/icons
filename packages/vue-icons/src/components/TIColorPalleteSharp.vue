<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M416 352C403.4 351.16 395 348 388 340C374 324 374 304 393.49 287.52L426.31 258.38C476.58 213.97 476.58 141.17 426.31 96.75C389.26 64.14 339.54 48 287.86 48C227.52 48 164.47 70 115.86 113.11C25.3999 193.11 25.3999 324.03 115.86 403.98C160.86 443.74 221.49 463.57 281.5 463.98H283.34C343.34 463.98 402.41 444.48 444.54 407.21C464 390 464 385 444.62 355.56C440 348 431 353 416 352ZM112 208C112 190.327 126.327 176 144 176C161.673 176 176 190.327 176 208C176 225.673 161.673 240 144 240C126.327 240 112 225.673 112 208ZM152 343C134.327 343 120 328.673 120 311C120 293.327 134.327 279 152 279C169.673 279 184 293.327 184 311C184 328.673 169.673 343 152 343ZM192 144C192 126.327 206.327 112 224 112C241.673 112 256 126.327 256 144C256 161.673 241.673 176 224 176C206.327 176 192 161.673 192 144ZM256 415C236.586 415 219.083 403.305 211.654 385.369C204.224 367.432 208.331 346.787 222.059 333.059C235.787 319.331 256.432 315.224 274.369 322.654C292.305 330.083 304 347.586 304 367C304 393.51 282.51 415 256 415ZM328 176C310.327 176 296 161.673 296 144C296 126.327 310.327 112 328 112C345.673 112 360 126.327 360 144C360 161.673 345.673 176 328 176Z" fill="currentColor"/>
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
