<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M64 48C46.3269 48 32 62.3269 32 80V96C32 113.673 46.3269 128 64 128H448C465.673 128 480 113.673 480 96V80C480 62.3269 465.673 48 448 48H64ZM64 164V408C64 438.928 89.0721 464 120 464H392C422.928 464 448 438.928 448 408V164C448 161.791 446.209 160 444 160H68C65.7909 160 64 161.791 64 164ZM331 315.63L267.31 379.31C261.062 385.553 250.938 385.553 244.69 379.31L181 315.63C174.91 309.54 174.35 299.63 180.15 293.25C183.092 290.009 187.234 288.115 191.61 288.009C195.986 287.903 200.215 289.595 203.31 292.69L240 329.37V224.45C240 215.84 246.62 208.45 255.23 208.02C259.602 207.809 263.869 209.399 267.038 212.418C270.206 215.438 272 219.623 272 224V329.37L308.69 292.69C311.785 289.595 316.014 287.903 320.39 288.009C324.766 288.115 328.908 290.009 331.85 293.25C337.65 299.62 337.09 309.54 331 315.63Z" fill="currentColor"/>
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
