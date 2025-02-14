<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M368 48H356.59C353.302 47.9967 350.35 45.9815 349.15 42.92C342.858 26.7071 327.261 16.0177 309.87 16H202.13C184.739 16.0177 169.142 26.7071 162.85 42.92C161.65 45.9815 158.698 47.9967 155.41 48H144C108.654 48 80 76.6538 80 112V432C80 467.346 108.654 496 144 496H368C403.346 496 432 467.346 432 432V112C432 76.6538 403.346 48 368 48ZM319.87 112H192.13C183.293 112 176.13 104.837 176.13 96C176.13 87.1634 183.293 80 192.13 80H319.87C328.707 80 335.87 87.1634 335.87 96C335.87 104.837 328.707 112 319.87 112Z" fill="currentColor"/>
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
