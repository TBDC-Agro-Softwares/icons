<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M171.32 239.38L149.38 262.68L161 273.65C237.05 345.26 313.5 389.53 403 412.81C383.43 443.29 348.72 464.24 307 470.56C297.805 471.944 288.519 472.636 279.22 472.63C229.91 472.63 180.29 453.42 142.29 418.73C95.46 375.95 62.8 309.1 45.22 220.1C28.58 135.9 30.9 74.89 31 72.33L32.4 39.15L57.48 60.91C57.4849 60.9142 57.495 60.9227 57.51 60.9356C58.9154 62.1356 104.315 100.901 147.63 114.04C171.426 121.254 193.26 124.913 214.336 128.446L214.48 128.47L214.488 128.471C252.975 134.921 289.323 141.012 329.57 167.01C375.32 196.56 406.62 236.28 420.06 281.87C430.187 316.219 429.151 351.428 417.431 383.42C433.301 387.35 449.6 390.6 466.43 393.19L482.24 395.62L477.38 427.25L461.56 424.81C441.851 421.813 422.309 417.808 403.01 412.81C403.79 411.59 404.56 410.35 405.3 409.1C410.098 400.929 414.154 392.345 417.419 383.45C330.48 361.94 256.6 319.74 182.97 250.38L171.32 239.38Z" fill="currentColor"/>
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
