<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M424 80C454.619 80 479.498 104.573 479.992 135.074L480 136V376C480 406.619 455.427 431.498 424.926 431.992L424 432H216C185.381 432 160.502 407.427 160.008 376.926L160 376V336C160 327.163 167.163 320 176 320C184.731 320 191.829 326.994 191.997 335.685L192 336V376C192 389.122 202.531 399.785 215.603 399.997L216 400H424C437.122 400 447.785 389.469 447.997 376.397L448 376V136C448 122.878 437.469 112.215 424.397 112.003L424 112H216C202.878 112 192.215 122.531 192.003 135.603L192 136V176C192 184.837 184.837 192 176 192C167.269 192 160.171 185.006 160.003 176.315L160 176V136C160 105.381 184.573 80.502 215.074 80.0075L216 80H424ZM260.686 164.686C266.848 158.525 276.785 158.439 283.051 164.43L283.314 164.686L363.314 244.686C369.475 250.848 369.561 260.785 363.57 267.051L363.314 267.314L283.314 347.314C277.065 353.562 266.935 353.562 260.686 347.314C254.525 341.152 254.439 331.215 260.43 324.949L260.686 324.686L313.373 272H48C39.1634 272 32 264.837 32 256C32 247.269 38.9939 240.171 47.6851 240.003L48 240H313.373L260.686 187.314C254.525 181.152 254.439 171.215 260.43 164.949L260.686 164.686Z" fill="currentColor"/>
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
