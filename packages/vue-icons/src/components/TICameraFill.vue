<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M432 144H373C370 144 366.28 142.06 363.38 139L337.44 98.06C337.03 97.4103 336.572 96.7919 336.07 96.21C327.11 85.76 315 80 302 80H210C197 80 184.89 85.76 175.93 96.21C175.428 96.7919 174.97 97.4103 174.56 98.06L148.62 139.06C146.4 141.48 143.28 144.06 140 144.06V136.06C140 127.223 132.837 120.06 124 120.06H100C91.1634 120.06 84 127.223 84 136.06V144.06H80C53.5018 144.088 32.0276 165.562 32 192.06V384C32.0276 410.498 53.5018 431.972 80 432H432C458.498 431.972 479.972 410.498 480 384V192C479.972 165.502 458.498 144.028 432 144ZM256 368C202.981 368 160 325.019 160 272C160 218.981 202.981 176 256 176C309.019 176 352 218.981 352 272C351.939 324.994 308.994 367.939 256 368ZM320 272C320 307.346 291.346 336 256 336C220.654 336 192 307.346 192 272C192 236.654 220.654 208 256 208C291.346 208 320 236.654 320 272Z" fill="currentColor"/>
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
