<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M447.86 80H64.14C37.553 80 16 101.553 16 128.14V335.86C16 362.447 37.553 384 64.14 384H447.86C474.447 384 496 362.447 496 335.86V128.14C496 101.553 474.447 80 447.86 80ZM64.14 112H447.86C456.774 112 464 119.226 464 128.14V335.86C464 344.774 456.774 352 447.86 352H64.14C55.2261 352 48 344.774 48 335.86V128.14C48 119.226 55.2261 112 64.14 112ZM400 416C400 407.163 392.837 400 384 400H128L127.685 400.003C118.994 400.171 112 407.269 112 416C112 424.837 119.163 432 128 432H384L384.315 431.997C393.006 431.829 400 424.731 400 416Z" fill="currentColor"/>
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
