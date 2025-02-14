<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M44 48C37.3726 48 32 53.3726 32 60V116C32 122.627 37.3726 128 44 128H468C474.627 128 480 122.627 480 116V60C480 53.3726 474.627 48 468 48H44ZM64 160L93.74 442.51C95.0247 454.726 105.326 464.001 117.61 464H394.39C406.674 464.001 416.975 454.726 418.26 442.51L448 160H64ZM312 377.46L256 321.46L200 377.46L174.54 352L230.54 296L174.54 240L200 214.54L256 270.54L312 214.54L337.46 240L281.46 296L337.46 352L312 377.46Z" fill="currentColor"/>
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
