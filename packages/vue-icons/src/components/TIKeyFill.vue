<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M218.1 167.17C218.1 180.17 218.1 192.77 222.2 204.57C179.1 255.17 65.3 388.87 54.7 399.07C50.4394 402.893 48.0037 408.346 48 414.07C48 422.57 53.2 430.77 57.6 435.37C64.2 442.27 92.4 468.37 97.6 463.37C113 448.37 116.1 444.37 122.4 438.17C131.9 428.87 121.4 409.87 124.7 402.17C128 394.47 131.5 392.97 137.2 391.77C142.9 390.57 153 394.67 160.9 394.77C169.2 394.87 173.7 391.37 179.9 385.57C184.9 380.97 188.5 376.67 188.6 369.97C188.8 360.97 175.8 349.07 185.5 339.57C195.2 330.07 209.2 345.77 219.5 344.57C229.8 343.37 242.3 329.07 243.6 322.97C244.9 316.87 231.9 301.17 233.9 292.27C234.6 289.27 240.7 282.27 245.3 281.27C249.9 280.27 270.3 288.17 274.9 287.17C280.5 285.97 287 280.07 292.3 276.77C307.8 283.47 321.9 286.17 340 286.17C408.5 286.17 464 232.77 464 166.97C464 101.17 408.5 48 340 48C271.5 48 218.1 101.37 218.1 167.17ZM400 144C400 161.673 385.673 176 368 176C350.327 176 336 161.673 336 144C336 126.327 350.327 112 368 112C385.673 112 400 126.327 400 144Z" fill="currentColor"/>
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
