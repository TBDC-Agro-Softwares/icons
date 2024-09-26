<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 48C141.13 48 48 141.13 48 256C48 370.87 141.13 464 256 464C370.87 464 464 370.87 464 256C464 141.13 370.87 48 256 48ZM353.67 329.1C329.6 303.89 302.16 290.42 245.09 290.42V327.74C245.077 331.06 243.091 334.055 240.038 335.359C236.984 336.663 233.447 336.027 231.04 333.74L146.58 254C144.934 252.45 144.001 250.29 144.001 248.03C144.001 245.77 144.934 243.61 146.58 242.06L231 162.29C233.407 160.003 236.944 159.367 239.998 160.671C243.051 161.975 245.037 164.97 245.05 168.29V205.61C333.78 205.61 362.47 261.25 367.92 322.7C368.65 330.42 359.07 334.75 353.67 329.1Z" fill="currentColor"/>
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
