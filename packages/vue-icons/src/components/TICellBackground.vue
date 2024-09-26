<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="513" viewBox="0 0 512 513" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M354.118 264.664L162.118 74.797L132.251 104.664L183.451 155.864L72.518 266.797C59.718 279.597 59.718 298.797 72.518 311.597L189.851 428.93C196.251 435.33 204.785 437.464 213.318 437.464C221.851 437.464 230.385 435.33 236.785 428.93L354.118 311.597C366.918 298.797 366.918 277.464 354.118 264.664ZM110.918 288.13L213.318 185.73L315.718 288.13H110.918ZM405.318 320.13C405.318 320.13 362.651 367.064 362.651 394.797C362.651 418.264 381.851 437.464 405.318 437.464C428.785 437.464 447.985 418.264 447.985 394.797C447.985 367.064 405.318 320.13 405.318 320.13Z" fill="currentColor"/>
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
