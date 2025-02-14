<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M272 188H311V156L201 156V188H240V326H201V358H311V326H272V188Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 102C48 72.1766 72.1766 48 102 48H410C439.823 48 464 72.1766 464 102V409C464 438.823 439.823 463 410 463H102C72.1766 463 48 438.823 48 409V102ZM102 80H410C422.15 80 432 89.8497 432 102V409C432 421.15 422.15 431 410 431H102C89.8497 431 80 421.15 80 409V102C80 89.8497 89.8497 80 102 80Z" fill="currentColor"/>
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
