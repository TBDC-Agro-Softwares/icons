<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M491.31 324.69L432 265.37C426.011 259.35 417.862 255.976 409.37 256H272V224H416C433.674 224 448 209.673 448 192V96C448 78.3269 433.674 64 416 64H272V48C272 39.1634 264.837 32 256 32C247.164 32 240 39.1634 240 48V64H102.63C94.1386 63.9765 85.9901 67.3504 80.0004 73.37L20.6904 132.69C14.447 138.938 14.447 149.062 20.6904 155.31L80.0004 214.63C85.9901 220.65 94.1386 224.024 102.63 224H240V256H96.0004C78.3273 256 64.0004 270.327 64.0004 288V384C64.0004 401.673 78.3273 416 96.0004 416H240V464C240 472.837 247.164 480 256 480C264.837 480 272 472.837 272 464V416H409.37C417.862 416.023 426.011 412.65 432 406.63L491.31 347.31C497.554 341.062 497.554 330.938 491.31 324.69Z" fill="currentColor"/>
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
