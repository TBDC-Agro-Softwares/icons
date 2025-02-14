<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M294.61 55.8L328 32L448 192L415.43 216.17L294.61 55.8Z" fill="currentColor"/>
<path d="M226.32 126.65L382.32 254.43L408.06 223.91L252.06 96.13L226.32 126.65Z" fill="currentColor"/>
<path d="M359.22 300L175.37 215.65L192.18 178.92L376 263.76L359.22 300Z" fill="currentColor"/>
<path d="M347.67 349.64L149.1 308.77L157.5 269.45L356.07 310.32L347.67 349.64Z" fill="currentColor"/>
<path d="M144 400H348V360H144V400Z" fill="currentColor"/>
<path d="M392 320V440H104V320H64V480H432V320H392Z" fill="currentColor"/>
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
