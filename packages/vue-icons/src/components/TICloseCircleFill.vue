<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 48C141.31 48 48 141.31 48 256C48 370.69 141.31 464 256 464C370.69 464 464 370.69 464 256C464 141.31 370.69 48 256 48ZM331.31 308.69C335.525 312.694 337.236 318.67 335.779 324.299C334.322 329.927 329.927 334.322 324.299 335.779C318.67 337.236 312.694 335.525 308.69 331.31L256 278.63L203.31 331.31C197.019 337.286 187.111 337.16 180.976 331.024C174.84 324.888 174.714 314.981 180.69 308.69L233.37 256L180.69 203.31C174.714 197.019 174.84 187.111 180.976 180.976C187.111 174.84 197.019 174.714 203.31 180.69L256 233.37L308.69 180.69C314.981 174.714 324.888 174.84 331.024 180.976C337.16 187.111 337.286 197.019 331.31 203.31L278.63 256L331.31 308.69Z" fill="currentColor"/>
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
