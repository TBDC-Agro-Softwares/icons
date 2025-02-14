<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 32C167.846 32 96 100.362 96 185C96 227.483 115.891 281.432 150.409 343.764L151.65 345.997C174.884 387.667 202.189 428.764 228.957 465.068L230.314 466.906C236.293 475.12 245.84 479.979 256 479.979L256.491 479.976C266.303 479.824 275.497 475.145 281.394 467.301L281.608 467.012C309.312 429.602 337.678 386.972 361.59 343.798C396.109 281.474 416 227.514 416 185C416 100.362 344.154 32 256 32ZM256 64C326.827 64 384 118.401 384 185C384 220.673 365.683 270.361 333.597 328.294L332.396 330.455C309.91 370.777 283.315 410.793 257.286 446.082L255.999 447.82L256.11 447.971C229.175 411.583 201.54 370.04 178.403 328.261C146.317 270.321 128 220.641 128 185C128 118.401 185.173 64 256 64ZM305 191.5C305 164.162 282.838 142 255.5 142C228.162 142 206 164.162 206 191.5C206 218.838 228.162 241 255.5 241C282.838 241 305 218.838 305 191.5Z" fill="currentColor"/>
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
