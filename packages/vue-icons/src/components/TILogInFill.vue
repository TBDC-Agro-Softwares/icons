<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M232 80H392C422.914 80.0331 447.967 105.086 448 136V376C447.967 406.914 422.914 431.967 392 432H240C209.79 432 176 408.05 176 376V272H329.37L276.69 324.69C270.714 330.981 270.84 340.888 276.976 347.024C283.111 353.16 293.019 353.286 299.31 347.31L379.31 267.31C385.553 261.062 385.553 250.938 379.31 244.69L299.31 164.69C293.019 158.714 283.111 158.84 276.976 164.976C270.84 171.112 270.714 181.019 276.69 187.31L329.37 240H176V136C176.033 105.086 201.086 80.0331 232 80ZM176 240H80C71.1634 240 64 247.163 64 256C64 264.837 71.1634 272 80 272H176V240Z" fill="currentColor"/>
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
