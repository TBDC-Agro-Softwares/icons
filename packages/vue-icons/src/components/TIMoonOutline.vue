<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M169.614 33.3799C86.4973 69.5607 32 153.945 32 248.05C32 376.177 135.873 480.05 264 480.05C358.105 480.05 442.49 425.553 478.67 342.436C484.471 329.112 470.937 315.579 457.613 321.38C435.017 331.219 406.986 336.05 376 336.05C265.547 336.05 176 246.504 176 136.05C176 105.065 180.832 77.0337 190.67 54.4374C196.471 41.1132 182.939 27.5797 169.614 33.3799ZM149.099 81.3983L149.009 81.8506C145.636 98.8336 144 117.031 144 136.05C144 264.177 247.873 368.05 376 368.05L377.267 368.048C395.827 367.977 413.594 366.339 430.2 363.042L430.651 362.95L430.03 363.837C393.26 415.656 331.606 448.05 264 448.05C153.547 448.05 64 358.504 64 248.05C64 180.444 96.3947 118.791 148.213 82.0202L149.099 81.3983Z" fill="currentColor"/>
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
