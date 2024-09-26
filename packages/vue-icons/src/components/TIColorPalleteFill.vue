<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M441 336.2L440.94 336.15C431.01 326.97 418.16 324.81 408.78 323.23L408.09 323.11C399.04 321.62 397.61 320.61 393.51 316.94C391.07 314.77 388.16 311.29 388.16 307C388.16 302.71 391.07 299.23 393.5 297.06L423.78 270.19C449.7 247.28 463.98 216.53 463.98 183.6C463.98 150.67 449.73 119.92 423.78 97C387.89 65.41 338.78 48 285.41 48C223.72 48 162 71.37 116 112.11C72.13 150.88 48 202.82 48 258.35C48 313.88 72.16 365.82 116 404.58C137.75 423.82 163.49 438.76 192.52 449C220.442 458.794 249.801 463.863 279.39 464H281.2C342.2 464 400.29 443.43 440.59 407.6C450.29 399.04 455.74 386.77 455.93 373.04C456.14 358.87 450.56 345.09 441 336.2ZM112 208C112 190.327 126.327 176 144 176C161.673 176 176 190.327 176 208C176 225.673 161.673 240 144 240C126.327 240 112 225.673 112 208ZM152 343C134.327 343 120 328.673 120 311C120 293.327 134.327 279 152 279C169.673 279 184 293.327 184 311C184 328.673 169.673 343 152 343ZM192 144C192 126.327 206.327 112 224 112C241.673 112 256 126.327 256 144C256 161.673 241.673 176 224 176C206.327 176 192 161.673 192 144ZM256 415C236.586 415 219.083 403.305 211.654 385.369C204.224 367.432 208.331 346.787 222.059 333.059C235.787 319.331 256.432 315.224 274.369 322.654C292.305 330.083 304 347.586 304 367C304 393.51 282.51 415 256 415ZM328 176C310.327 176 296 161.673 296 144C296 126.327 310.327 112 328 112C345.673 112 360 126.327 360 144C360 161.673 345.673 176 328 176Z" fill="currentColor"/>
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
