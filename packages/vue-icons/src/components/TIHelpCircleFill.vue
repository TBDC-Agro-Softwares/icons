<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 64C150 64 64 150 64 256C64 362 150 448 256 448C362 448 448 362 448 256C448 150 362 64 256 64ZM250 368C238.954 368 230 359.046 230 348C230 336.954 238.954 328 250 328C261.046 328 270 336.954 270 348C270 359.046 261.046 368 250 368ZM283.44 266C267.23 276.88 265 286.85 265 296C265 303.732 258.732 310 251 310C243.268 310 237 303.732 237 296C237 274.09 247.08 256.67 267.82 242.74C287.1 229.8 298 221.6 298 203.57C298 191.31 291 182 276.51 175.11C273.1 173.49 265.51 171.91 256.17 172.02C244.45 172.17 235.35 174.97 228.34 180.61C215.12 191.25 214 202.83 214 203C213.759 208.002 210.868 212.495 206.415 214.787C201.963 217.079 196.626 216.822 192.415 214.112C188.204 211.402 185.759 206.652 186 201.65C186.11 199.22 187.8 177.33 210.77 158.85C222.68 149.27 237.83 144.29 255.77 144.07C268.47 143.92 280.4 146.07 288.49 149.89C312.7 161.34 326 180.43 326 203.57C326 237.4 303.39 252.59 283.44 266Z" fill="currentColor"/>
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
