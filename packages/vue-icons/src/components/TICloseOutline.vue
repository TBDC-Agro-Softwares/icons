<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M155.051 132.43C148.785 126.439 138.848 126.525 132.686 132.686C126.438 138.935 126.438 149.065 132.686 155.314L233.373 256L132.686 356.686L132.43 356.949C126.439 363.215 126.525 373.152 132.686 379.314C138.935 385.562 149.065 385.562 155.314 379.314L256 278.627L356.686 379.314L356.949 379.57C363.215 385.561 373.152 385.475 379.314 379.314C385.562 373.065 385.562 362.935 379.314 356.686L278.627 256L379.314 155.314L379.57 155.051C385.561 148.785 385.475 138.848 379.314 132.686C373.065 126.438 362.935 126.438 356.686 132.686L256 233.373L155.314 132.686L155.051 132.43Z" fill="currentColor"/>
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
