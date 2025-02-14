<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M278 144V256H442C454.15 256 464 246.15 464 234V166C464 153.85 454.15 144 442 144H382.18C398.914 109.535 388.122 68.018 356.721 46.0663C325.32 24.1145 282.622 28.2367 256 55.79C229.337 28.3924 186.747 24.3574 155.413 46.2604C124.079 68.1634 113.239 109.548 129.81 144H70C57.8497 144 48 153.85 48 166V234C48 239.835 50.3179 245.431 54.4437 249.556C58.5695 253.682 64.1652 256 70 256H234V144H278ZM278 144V110C278 91.2223 293.222 76 312 76C330.778 76 346 91.2223 346 110C346 128.778 330.778 144 312 144H278ZM234 144H200C181.222 144 166 128.778 166 110C166 91.2223 181.222 76 200 76C218.778 76 234 91.2223 234 110V144ZM278 480H410C422.15 480 432 470.15 432 458V288H278V480ZM102 480C89.8497 480 80 470.15 80 458V288H234V480H102Z" fill="currentColor"/>
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
