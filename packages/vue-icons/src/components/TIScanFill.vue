<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M465.99 122.71C465.301 80.2268 430.647 46 388 46H342L341.636 46.0029C329.654 46.1972 320 55.9712 320 68C320 80.1503 329.85 90 342 90H388L388.562 90.0046C407.081 90.3048 422 105.41 422 124V170L422.003 170.364C422.197 182.346 431.971 192 444 192C456.15 192 466 182.15 466 170V124L465.99 122.71ZM465.997 341.636C465.803 329.654 456.029 320 444 320C431.85 320 422 329.85 422 342V388L421.995 388.562C421.695 407.081 406.59 422 388 422H342L341.636 422.003C329.654 422.197 320 431.971 320 444C320 456.15 329.85 466 342 466H388L389.29 465.99C431.773 465.301 466 430.647 466 388V342L465.997 341.636ZM68 320C80.0288 320 89.8028 329.654 89.9971 341.636L90 342V388C90 406.59 104.919 421.695 123.438 421.995L124 422H170C182.15 422 192 431.85 192 444C192 456.029 182.346 465.803 170.364 465.997L170 466H124C81.3526 466 46.6993 431.773 46.0104 389.29L46 388V342C46 329.85 55.8497 320 68 320ZM192 68C192 55.8497 182.15 46 170 46H124L122.71 46.0104C80.2268 46.6993 46 81.3526 46 124V170L46.0029 170.364C46.1972 182.346 55.9712 192 68 192C80.1503 192 90 182.15 90 170V124L90.0046 123.438C90.3048 104.919 105.41 90 124 90H170L170.364 89.9971C182.346 89.8028 192 80.0288 192 68Z" fill="currentColor"/>
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
