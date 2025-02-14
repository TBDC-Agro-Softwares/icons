<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M340 99C339.998 55.6369 306.615 19.5834 263.381 16.2496C220.146 12.9159 181.631 43.4255 174.981 86.2757C168.332 129.126 195.788 169.874 238 179.8V464L257 496L276 464V179.8C313.44 170.89 339.899 137.486 340 99ZM281 93C269.402 93 260 83.598 260 72C260 60.402 269.402 51 281 51C292.598 51 302 60.402 302 72C302 77.5695 299.787 82.911 295.849 86.8492C291.911 90.7875 286.569 93 281 93Z" fill="currentColor"/>
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
