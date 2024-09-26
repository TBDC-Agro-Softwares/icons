<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M339.43 64V259.6H297.83L225.6 141.28L227.54 259.6H181.71V131.2L139.09 96C140.23 97.44 141.37 98.88 142.4 100.44C153.83 117.12 159.54 137.04 159.54 161.04C159.54 220.04 124.54 259.56 71.66 259.56H0V260.04L228.11 448H512V205.72L339.43 64Z" fill="currentColor"/>
<path d="M295.31 122.8L222.86 64L295.54 186.64L295.31 122.8Z" fill="currentColor"/>
<path d="M66.51 108.4C95.66 108.4 111.89 127.72 111.89 162.52C111.89 196.72 96 215.2 66.29 215.2H44.57V108.4H66.51Z" fill="currentColor"/>
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
