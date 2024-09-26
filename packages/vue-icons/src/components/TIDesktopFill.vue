<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M448 48C474.498 48.0276 495.972 69.5018 496 96V288H16V96C16.0276 69.5018 37.5018 48.0276 64 48H448ZM16 352C16.0276 378.498 37.5018 399.972 64 400H197.88L193.88 432H144C135.163 432 128 439.163 128 448C128 456.837 135.163 464 144 464H368C376.837 464 384 456.837 384 448C384 439.163 376.837 432 368 432H318.12L314.12 400H448C474.498 399.972 495.972 378.498 496 352V304H16V352ZM256 336C264.837 336 272 343.163 272 352C272 360.837 264.837 368 256 368C247.163 368 240 360.837 240 352C240 343.163 247.163 336 256 336Z" fill="currentColor"/>
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
