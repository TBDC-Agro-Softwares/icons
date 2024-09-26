<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M488.727 24C501.58 24 512 34.2975 512 47C512 59.5513 501.827 69.7545 489.185 69.9956L488.727 70H23.2727C10.4196 70 0 59.7025 0 47C0 34.4487 10.1729 24.2455 22.8147 24.0044L23.2727 24H488.727ZM512 187C512 174.297 501.58 164 488.727 164H23.2727L22.8147 164.004C10.1729 164.246 0 174.449 0 187C0 199.703 10.4196 210 23.2727 210H488.727L489.185 209.996C501.827 209.754 512 199.551 512 187ZM512 325C512 312.297 501.58 302 488.727 302H23.2727L22.8147 302.004C10.1729 302.246 0 312.449 0 325C0 337.703 10.4196 348 23.2727 348H488.727L489.185 347.996C501.827 347.754 512 337.551 512 325ZM512 465C512 452.297 501.58 442 488.727 442H23.2727L22.8147 442.004C10.1729 442.246 0 452.449 0 465C0 477.703 10.4196 488 23.2727 488H488.727L489.185 487.996C501.827 487.754 512 477.551 512 465Z" fill="currentColor"/>
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
