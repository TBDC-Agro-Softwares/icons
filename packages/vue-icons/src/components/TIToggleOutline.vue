<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M368 112H144C64.471 112 0 176.471 0 256C0 335.529 64.471 400 144 400H368C447.529 400 512 335.529 512 256C512 176.471 447.529 112 368 112ZM277.483 144H144C82.1441 144 32 194.144 32 256C32 317.856 82.1441 368 144 368H277.483C244.859 341.601 224 301.236 224 256C224 210.764 244.859 170.399 277.483 144ZM368 368C429.856 368 480 317.856 480 256C480 194.144 429.856 144 368 144C306.144 144 256 194.144 256 256C256 317.856 306.144 368 368 368Z" fill="currentColor"/>
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
