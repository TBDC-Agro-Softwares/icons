<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M416 64H400V48.45C400 39.84 393.38 32.45 384.77 32.02C380.398 31.8094 376.131 33.3989 372.962 36.4182C369.794 39.4376 368 43.6232 368 48V64H144V48.45C144 39.84 137.38 32.45 128.77 32.02C124.398 31.8094 120.131 33.3989 116.962 36.4182C113.794 39.4376 112 43.6232 112 48V64H96C60.6538 64 32 92.6538 32 128V416C32 451.346 60.6538 480 96 480H416C451.346 480 480 451.346 480 416V128C480 92.6538 451.346 64 416 64ZM224 307.43C224 323.209 211.209 336 195.43 336H124.57C108.791 336 96 323.209 96 307.43V236.57C96 220.791 108.791 208 124.57 208H195.43C211.209 208 224 220.791 224 236.57V307.43ZM448 136V156C448 158.209 446.209 160 444 160H68C65.7909 160 64 158.209 64 156V128C64.0494 110.347 78.3474 96.0495 96 96H416C433.653 96.0495 447.951 110.347 448 128V136Z" fill="currentColor"/>
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
