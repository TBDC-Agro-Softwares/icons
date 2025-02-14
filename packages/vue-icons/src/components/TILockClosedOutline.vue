<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M351.987 111.412C351.139 59.1254 308.489 17 256 17C202.981 17 160 59.9807 160 113V192H144C108.654 192 80 220.654 80 256V432C80 467.346 108.654 496 144 496H368C403.346 496 432 467.346 432 432V256C432 220.654 403.346 192 368 192H352V113L351.987 111.412ZM320 192V113C320 77.6538 291.346 49 256 49C221.007 49 192.574 77.0836 192.009 111.942L192 113V192H320ZM176 224H144C126.327 224 112 238.327 112 256V432C112 449.673 126.327 464 144 464H368C385.673 464 400 449.673 400 432V256C400 238.327 385.673 224 368 224H336H176Z" fill="currentColor"/>
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
