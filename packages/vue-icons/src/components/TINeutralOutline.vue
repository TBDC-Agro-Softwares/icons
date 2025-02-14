<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="256" height="257" viewBox="0 0 256 257" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M104 116.5C104 123.127 98.6274 128.5 92 128.5C85.3726 128.5 80 123.127 80 116.5C80 109.873 85.3726 104.5 92 104.5C98.6274 104.5 104 109.873 104 116.5Z" fill="currentColor"/>
<path d="M164 128.5C170.627 128.5 176 123.127 176 116.5C176 109.873 170.627 104.5 164 104.5C157.373 104.5 152 109.873 152 116.5C152 123.127 157.373 128.5 164 128.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M128 16.5C66.1441 16.5 16 66.6441 16 128.5C16 190.356 66.1441 240.5 128 240.5C189.856 240.5 240 190.356 240 128.5C240 66.6441 189.856 16.5 128 16.5ZM128 32.5C181.019 32.5 224 75.4807 224 128.5C224 181.519 181.019 224.5 128 224.5C74.9807 224.5 32 181.519 32 128.5C32 75.4807 74.9807 32.5 128 32.5Z" fill="currentColor"/>
<path d="M172 154.5C174.209 154.5 176 156.291 176 158.5V167C176 169.209 174.209 171 172 171H84C81.7909 171 80 169.209 80 167L80 158.5C80 156.291 81.7909 154.5 84 154.5H172Z" fill="currentColor"/>
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
