<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M146.18 383.8C150.001 387.156 154.915 389.005 160 389C168.752 389.003 176.589 383.579 179.667 375.386C182.745 367.193 180.419 357.95 173.83 352.19L63.8904 256L173.84 159.81C182.569 152.172 183.453 138.904 175.815 130.175C168.177 121.446 154.909 120.562 146.18 128.2L18.1804 240.2C13.6259 244.188 11.0137 249.947 11.0137 256C11.0137 262.053 13.6259 267.812 18.1804 271.8L146.18 383.8ZM332.326 375.391C335.406 383.584 343.247 389.008 352 389C357.09 389.009 362.008 387.16 365.83 383.8L493.83 271.8C498.385 267.812 500.997 262.053 500.997 256C500.997 249.947 498.385 244.188 493.83 240.2L365.83 128.2C357.102 120.562 343.833 121.446 336.195 130.175C328.557 138.904 329.442 152.172 338.17 159.81L448.11 256L338.16 352.19C331.57 357.952 329.245 367.197 332.326 375.391Z" fill="currentColor"/>
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
