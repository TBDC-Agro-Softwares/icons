<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M415.997 79.6851C415.829 70.9939 408.731 64 400 64C391.163 64 384 71.1634 384 80V216.434L151.217 77.1111C126.055 62.086 96 81.647 96 111V401C96 430.353 126.055 449.914 151.203 434.897L384 295.566V432L384.003 432.315C384.171 441.006 391.269 448 400 448C408.837 448 416 440.837 416 432V80L415.997 79.6851ZM134.797 104.577L382.683 252.939C384.425 253.981 384.425 258.019 382.686 259.059L134.783 407.431C131.957 409.118 128 406.543 128 401V111C128 105.457 131.957 102.882 134.797 104.577Z" fill="currentColor"/>
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
