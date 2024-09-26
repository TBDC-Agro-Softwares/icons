<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M176 240C167.163 240 160 247.163 160 256C160 264.837 167.163 272 176 272H320V376C319.967 406.914 294.914 431.967 264 432H104C73.0858 431.967 48.0331 406.914 48 376V136C48.0331 105.086 73.0858 80.0331 104 80H256C286.21 80 320 104 320 136V240H176ZM320 240V272H409.37L356.69 324.69C352.475 328.694 350.764 334.67 352.221 340.299C353.678 345.927 358.073 350.322 363.701 351.779C369.33 353.236 375.306 351.525 379.31 347.31L459.31 267.31C465.553 261.062 465.553 250.938 459.31 244.69L379.31 164.69C373.019 158.714 363.112 158.84 356.976 164.976C350.84 171.112 350.714 181.019 356.69 187.31L409.37 240H320Z" fill="currentColor"/>
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
