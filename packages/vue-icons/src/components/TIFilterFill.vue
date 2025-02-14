<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M472 168H40C26.7452 168 16 157.255 16 144C16 130.745 26.7452 120 40 120H472C485.255 120 496 130.745 496 144C496 157.255 485.255 168 472 168ZM392 280H120C106.745 280 96 269.255 96 256C96 242.745 106.745 232 120 232H392C405.255 232 416 242.745 416 256C416 269.255 405.255 280 392 280ZM216 392H296C309.255 392 320 381.255 320 368C320 354.745 309.255 344 296 344H216C202.745 344 192 354.745 192 368C192 381.255 202.745 392 216 392Z" fill="currentColor"/>
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
