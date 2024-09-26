<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M336 272V376C335.967 406.914 310.914 431.967 280 432H88C57.0858 431.967 32.0331 406.914 32 376V136C32.0331 105.086 57.0858 80.0331 88 80H280C310.914 80.0331 335.967 105.086 336 136V240H191C182.163 240 175 247.163 175 256C175 264.837 182.163 272 191 272H336ZM336 272H425.37L372.69 324.69C366.714 330.981 366.84 340.888 372.976 347.024C379.112 353.16 389.019 353.286 395.31 347.31L475.31 267.31C481.553 261.062 481.553 250.938 475.31 244.69L395.31 164.69C389.019 158.714 379.112 158.84 372.976 164.976C366.84 171.112 366.714 181.019 372.69 187.31L425.37 240H336V272Z" fill="currentColor"/>
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
