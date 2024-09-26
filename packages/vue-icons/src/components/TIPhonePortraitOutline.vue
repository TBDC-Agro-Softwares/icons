<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M312 0H200H176C140.654 0 112 28.6538 112 64V448C112 483.346 140.654 512 176 512H336C371.346 512 400 483.346 400 448V64C400 28.6538 371.346 0 336 0H312ZM336 32H318.99L318.945 32.1811C315.373 45.7277 303.141 55.7588 288.529 55.9957L288 56H224C209.155 56 196.67 45.8909 193.055 32.1811L193.009 32H176C158.327 32 144 46.3269 144 64V448C144 465.673 158.327 480 176 480H336C353.673 480 368 465.673 368 448V64C368 46.3269 353.673 32 336 32Z" fill="currentColor"/>
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
