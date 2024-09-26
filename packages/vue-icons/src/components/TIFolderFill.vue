<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M440 96C470.928 96 496 121.072 496 152V168C496 172.418 492.418 176 488 176H24C19.5817 176 16 172.418 16 168V120C16 89.072 41.0721 64 72 64H147.89C158.964 63.9783 169.794 67.2541 179 73.41L206.8 92C210.742 94.6229 215.375 96.0152 220.11 96H440ZM72 448C41.0721 448 16 422.928 16 392V216C16 211.582 19.5817 208 24 208H488C492.418 208 496 211.582 496 216V392C496 422.928 470.928 448 440 448H72Z" fill="currentColor"/>
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
