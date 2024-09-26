<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M384 416C384.034 444.847 403.331 470.119 431.15 477.75C431.723 477.882 432.102 478.429 432.024 479.012C431.946 479.594 431.438 480.023 430.85 480H88C57.0721 480 32 454.928 32 424V44C32 37.3726 37.3726 32 44 32H372C378.627 32 384 37.3726 384 44V416ZM96 112V208H192V112H96ZM320 400H96V368H320V400ZM96 336H320V304H96V336ZM320 272H96V240H320V272ZM224 208H320V176H224V208ZM320 144H224V112H320V144ZM416 112H468C474.627 112 480 117.373 480 124V416C480 433.673 465.673 448 448 448C430.327 448 416 433.673 416 416V112Z" fill="currentColor"/>
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
      return ['is-small', 'is-medium', 'is-large', 'is-default', 'is-12', 'is-14', 'is-26', 'is-28', 'is-36'].indexOf(value) > -1;
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
