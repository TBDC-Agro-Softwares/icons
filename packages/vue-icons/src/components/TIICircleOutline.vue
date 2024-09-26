<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M311 188H272V326H311V358H201V326H240V188H201V156L311 156V188Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 256C48 141.125 141.125 48 256 48C370.875 48 464 141.125 464 256C464 370.875 370.875 464 256 464C141.125 464 48 370.875 48 256ZM432 256C432 158.798 353.202 80 256 80C158.798 80 80 158.798 80 256C80 353.202 158.798 432 256 432C353.202 432 432 353.202 432 256Z" fill="currentColor"/>
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
