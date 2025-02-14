<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 256C48 141.163 141.163 48 256 48C370.837 48 464 141.163 464 256C464 370.837 370.837 464 256 464C141.163 464 48 370.837 48 256ZM432 256C432 158.837 353.163 80 256 80C158.837 80 80 158.837 80 256C80 353.163 158.837 432 256 432C353.163 432 432 353.163 432 256ZM180.686 180.686C186.848 174.525 196.785 174.439 203.051 180.43L203.314 180.686L256 233.373L308.686 180.686C314.935 174.438 325.065 174.438 331.314 180.686C337.475 186.848 337.561 196.785 331.57 203.051L331.314 203.314L278.627 256L331.314 308.686C337.562 314.935 337.562 325.065 331.314 331.314C325.152 337.475 315.215 337.561 308.949 331.57L308.686 331.314L256 278.627L203.314 331.314C197.065 337.562 186.935 337.562 180.686 331.314C174.525 325.152 174.439 315.215 180.43 308.949L180.686 308.686L233.373 256L180.686 203.314C174.438 197.065 174.438 186.935 180.686 180.686Z" fill="currentColor"/>
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
