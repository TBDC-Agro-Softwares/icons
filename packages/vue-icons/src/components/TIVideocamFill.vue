<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M84 400H268C305.539 399.961 335.961 369.539 336 332V179.52C335.956 142.248 305.752 112.044 268.48 112H84C46.4606 112.039 16.0386 142.461 16 180V332C16.0386 369.539 46.4606 399.961 84 400ZM451 381.62C455.092 383.443 459.521 384.387 464 384.39V384.38C481.673 384.38 496 370.053 496 352.38V159.62C496 148.787 490.519 138.69 481.435 132.787C472.352 126.885 460.899 125.979 451 130.38C450.048 130.803 449.14 131.318 448.29 131.92L365.58 190.14C357.068 196.132 352.002 205.89 352 216.3V295.7C352.002 306.11 357.068 315.868 365.58 321.86L448.29 380.08C449.14 380.682 450.048 381.197 451 381.62Z" fill="currentColor"/>
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
