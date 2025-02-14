<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M89.22 32.6401L345.8 174L285.19 231.93L84.06 39.6101C80.44 36.1301 84.64 30.1501 89.06 32.5501L89.22 32.6401Z" fill="currentColor"/>
<path d="M48 452.49V59.4901C48.0054 57.7467 49.0557 56.1767 50.665 55.5063C52.2743 54.836 54.1286 55.1961 55.37 56.4201L260 256L55.37 455.56C54.1286 456.784 52.2743 457.144 50.665 456.474C49.0557 455.803 48.0054 454.233 48 452.49Z" fill="currentColor"/>
<path d="M84.08 472.39C80.44 475.87 84.64 481.85 89.08 479.45L89.24 479.36L345.8 338L285.19 280.05L84.08 472.39Z" fill="currentColor"/>
<path d="M377.73 191.54L449.38 231C468.87 241.77 468.87 270.23 449.38 281L377.73 320.43L310.36 256L377.73 191.54Z" fill="currentColor"/>
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
