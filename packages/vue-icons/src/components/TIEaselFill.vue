<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M432 64H272V48C272 39.1634 264.837 32 256 32C247.163 32 240 39.1634 240 48V64H80C53.5018 64.0276 32.0276 85.5018 32 112V320C32.0276 346.498 53.5018 367.972 80 368H122.79L96.62 459.6C94.9202 465.135 96.3432 471.156 100.341 475.344C104.339 479.533 110.287 481.235 115.895 479.794C121.503 478.354 125.895 473.996 127.38 468.4L156.07 368H240V416C240 424.837 247.163 432 256 432C264.837 432 272 424.837 272 416V368H355.93L384.62 468.4C386.105 473.996 390.497 478.354 396.105 479.794C401.713 481.235 407.661 479.533 411.659 475.344C415.657 471.156 417.08 465.135 415.38 459.6L389.21 368H432C458.498 367.972 479.972 346.498 480 320V112C479.972 85.5018 458.498 64.0276 432 64ZM448 320C448 328.837 440.837 336 432 336H80C71.1634 336 64 328.837 64 320V112C64 103.163 71.1634 96 80 96H432C440.837 96 448 103.163 448 112V320ZM92 112C85.3726 112 80 117.373 80 124V308C80 314.627 85.3726 320 92 320H420C426.627 320 432 314.627 432 308V124C432 117.373 426.627 112 420 112H92Z" fill="currentColor"/>
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
