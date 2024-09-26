<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="516" viewBox="0 0 512 516" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M149.331 64.913C125.864 64.913 106.664 84.2173 106.664 107.812V408.101C106.664 431.695 125.864 451 149.331 451H362.664C386.131 451 405.331 431.695 405.331 408.101V163.58L307.197 64.913H149.331ZM362.664 408.101H149.331V107.812H277.331V193.609H362.664V408.101Z" fill="currentColor"/>
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
