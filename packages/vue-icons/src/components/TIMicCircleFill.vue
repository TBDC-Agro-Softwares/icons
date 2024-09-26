<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 48C141.31 48 48 141.31 48 256C48 370.69 141.31 464 256 464C370.69 464 464 370.69 464 256C464 141.31 370.69 48 256 48ZM208 176C208.077 149.522 229.522 128.077 256 128C282.478 128.077 303.923 149.522 304 176V240C303.923 266.478 282.478 287.923 256 288C229.522 287.923 208.077 266.478 208 240V176ZM352 248.22C352 271.58 341.06 293.83 321.21 310.88C307.183 322.92 290.194 330.991 272 334.26V352H288C296.837 352 304 359.163 304 368C304 376.837 296.837 384 288 384H224C215.163 384 208 376.837 208 368C208 359.163 215.163 352 224 352H240V334.26C221.806 330.991 204.817 322.92 190.79 310.88C170.94 293.83 160 271.58 160 248.22V224.3C160 215.463 167.163 208.3 176 208.3C184.837 208.3 192 215.463 192 224.3V248.22C192 273.88 220 303.7 256 303.7C285.6 303.7 320 279.47 320 248.22V224.3C320 215.463 327.163 208.3 336 208.3C344.837 208.3 352 215.463 352 224.3V248.22Z" fill="currentColor"/>
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
