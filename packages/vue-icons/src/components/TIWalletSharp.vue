<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M129 119H433V66.52C433 61.7259 430.851 57.1843 427.143 54.145C423.436 51.1057 418.561 49.8891 413.86 50.83L47.6398 111.017C47.5776 111.027 47.5157 111.038 47.4538 111.048L45.8601 111.31C43.8536 111.709 41.9777 112.481 40.3117 113.556C35.1963 116.64 32.3301 122.272 32.3301 131V274.5L32.5001 274.425V447C32.5001 455.836 39.6635 463 48.5001 463H464.5C473.337 463 480.5 455.836 480.5 447V159C480.5 150.163 473.337 143 464.5 143H129V119ZM337 303C337 320.673 351.327 335 369 335C386.673 335 401 320.673 401 303C401 285.327 386.673 271 369 271C351.327 271 337 285.327 337 303Z" fill="currentColor"/>
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
