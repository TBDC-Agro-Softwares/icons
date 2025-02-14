<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M384 96H336V16H176V96H128C110.327 96 96 110.327 96 128V384C96 401.673 110.327 416 128 416H176V496H336V416H384C401.673 416 416 401.673 416 384V128C416 110.327 401.673 96 384 96ZM392 368C392 381.255 381.255 392 368 392H144C130.745 392 120 381.255 120 368V144C120 130.745 130.745 120 144 120H368C381.255 120 392 130.745 392 144V368ZM144 136C139.582 136 136 139.582 136 144V368C136 372.418 139.582 376 144 376H368C372.418 376 376 372.418 376 368V144C376 139.582 372.418 136 368 136H144Z" fill="currentColor"/>
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
