<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 80C287.398 80 319.354 104.793 319.99 135.081L320 136V176C320 184.837 312.837 192 304 192C295.269 192 288.171 185.006 288.003 176.315L288 176V136C288 125.026 271.845 112.258 256.466 112.004L256 112H104C90.8777 112 80.2152 122.531 80.0032 135.603L80 136V376C80 389.122 90.5313 399.785 103.603 399.997L104 400H264C277.122 400 287.785 389.469 287.997 376.397L288 376V336C288 327.163 295.163 320 304 320C312.731 320 319.829 326.994 319.997 335.685L320 336V376C320 406.619 295.427 431.498 264.926 431.992L264 432H104C73.3813 432 48.502 407.427 48.0075 376.926L48 376V136C48 105.381 72.5731 80.502 103.074 80.0075L104 80H256ZM356.686 164.686C362.848 158.525 372.785 158.439 379.051 164.43L379.314 164.686L459.314 244.686C465.475 250.848 465.561 260.785 459.57 267.051L459.314 267.314L379.314 347.314C373.065 353.562 362.935 353.562 356.686 347.314C350.525 341.152 350.439 331.215 356.43 324.949L356.686 324.686L409.373 272H176C167.163 272 160 264.837 160 256C160 247.269 166.994 240.171 175.685 240.003L176 240H409.373L356.686 187.314C350.525 181.152 350.439 171.215 356.43 164.949L356.686 164.686Z" fill="currentColor"/>
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
