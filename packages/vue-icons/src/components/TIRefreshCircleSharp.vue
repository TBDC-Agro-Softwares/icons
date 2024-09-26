<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 48C141.31 48 48 141.32 48 256C48 370.86 141.14 464 256 464C370.69 464 464 370.69 464 256C464 141.13 370.87 48 256 48ZM350 267C350 318.915 307.915 361 256 361C204.085 361 162 318.915 162 267C162 215.085 204.085 173 256 173H260.21L236.21 149L256 129.2L315.8 189L256 248.8L236.2 229L264.12 201.08C261.72 201 259 201 256 201C219.549 201 190 230.549 190 267C190 303.451 219.549 333 256 333C292.451 333 322 303.451 322 267V253H350V267Z" fill="currentColor"/>
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
