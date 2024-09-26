<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 64C150.13 64 64 150.13 64 256C64 361.87 150.13 448 256 448C361.87 448 448 361.87 448 256C448 150.13 361.87 64 256 64ZM336 358.63L281.85 304.48C244.34 330.291 193.341 323.259 164.216 288.261C135.091 253.262 137.441 201.834 169.638 169.638C201.834 137.441 253.262 135.091 288.261 164.216C323.259 193.341 330.291 244.34 304.48 281.85L358.63 336L336 358.63ZM288 232C288 262.928 262.928 288 232 288C201.072 288 176 262.928 176 232C176 201.072 201.072 176 232 176C262.928 176 288 201.072 288 232Z" fill="currentColor"/>
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
