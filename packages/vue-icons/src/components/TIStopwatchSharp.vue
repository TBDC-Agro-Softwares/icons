<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M280 81.5V48H232V81.5C201.692 85.3047 172.739 96.3229 147.57 113.63L120 86L86.0001 120L111.59 145.59C80.8735 180.532 63.9532 225.476 64.0001 272C64.0001 377.87 150.13 464 256 464C361.87 464 448 377.87 448 272C448 174.26 374.58 93.34 280 81.5ZM256 320C232.628 319.993 212.658 303.153 208.705 280.117C204.753 257.082 217.967 234.547 240 226.75V136H272V226.75C294.033 234.547 307.248 257.082 303.295 280.117C299.343 303.153 279.373 319.993 256 320Z" fill="currentColor"/>
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
