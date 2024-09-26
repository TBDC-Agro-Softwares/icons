<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M456.69 421.39L362.6 327.3C385.253 297.143 397.481 260.437 397.44 222.72C397.44 126.38 319.06 48 222.72 48C126.38 48 48 126.38 48 222.72C48 319.06 126.38 397.44 222.72 397.44C260.437 397.481 297.143 385.253 327.3 362.6L421.39 456.69C431.279 465.53 446.35 465.108 455.729 455.729C465.108 446.35 465.53 431.279 456.69 421.39ZM97.92 222.72C97.92 153.795 153.795 97.92 222.72 97.92C291.645 97.92 347.52 153.795 347.52 222.72C347.52 291.645 291.645 347.52 222.72 347.52C153.829 347.437 98.0027 291.611 97.92 222.72Z" fill="currentColor"/>
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
