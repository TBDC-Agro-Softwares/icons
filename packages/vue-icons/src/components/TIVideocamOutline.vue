<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M268.529 112L84 112C46.4688 112.108 16.1077 142.469 16.0001 179.954L16 332C16.1077 369.531 46.4688 399.892 83.954 400L268 400C305.531 399.892 335.892 369.531 336 332.046L336 179.52C335.885 142.255 305.745 112.115 268.529 112ZM84.046 144L268.453 144C288.062 144.073 303.939 159.958 304 179.569L304 332C303.943 351.838 287.838 367.943 267.954 368L84 368C64.162 367.943 48.057 351.838 47.9999 331.954L48 180C48.057 160.162 64.162 144.057 84.046 144ZM451 130.38C450.049 130.803 449.141 131.317 448.29 131.916L365.58 190.137C357.067 196.129 352 205.889 352 216.3V295.7C352 306.111 357.067 315.871 365.58 321.863L448.29 380.084C449.141 380.683 450.049 381.197 451 381.62C460.899 386.021 472.352 385.115 481.435 379.213C490.519 373.31 496 363.213 496 352.38V159.62C496 148.787 490.519 138.69 481.435 132.787C472.352 126.885 460.899 125.979 451 130.38ZM464 159.99V352.009L384 295.697V216.302L464 159.99Z" fill="currentColor"/>
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
