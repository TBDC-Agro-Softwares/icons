<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M224 128C224 145.673 238.327 160 256 160C264.487 160 272.626 156.629 278.627 150.627C284.629 144.626 288 136.487 288 128C288 110.327 273.673 96 256 96C238.327 96 224 110.327 224 128ZM260 200C270.931 200 279.813 208.769 279.997 219.656L280 220V376H325C336.046 376 345 384.954 345 396C345 406.931 336.231 415.813 325.344 415.997L325 416H187C175.954 416 167 407.046 167 396C167 385.069 175.769 376.187 186.656 376.003L187 376H240V240H196C185.069 240 176.187 231.231 176.003 220.344L176 220C176 209.069 184.769 200.187 195.656 200.003L196 200H260Z" fill="currentColor"/>
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
