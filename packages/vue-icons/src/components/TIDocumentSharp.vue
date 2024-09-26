<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M240 32V216C240 220.418 243.582 224 248 224H432V468C432 474.627 426.627 480 420 480H92C85.3726 480 80 474.627 80 468V44C80 37.3726 85.3726 32 92 32H240ZM272 188V41.69C271.999 40.8819 272.485 40.1528 273.231 39.8421C273.977 39.5314 274.837 39.7003 275.41 40.27L423.73 188.59C424.3 189.163 424.469 190.023 424.158 190.769C423.847 191.515 423.118 192.001 422.31 192H276C273.791 192 272 190.209 272 188Z" fill="currentColor"/>
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
