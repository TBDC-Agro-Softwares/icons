<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M144 256C144 282.51 122.51 304 96 304C69.4903 304 48 282.51 48 256C48 229.49 69.4903 208 96 208C122.51 208 144 229.49 144 256ZM256 304C282.51 304 304 282.51 304 256C304 229.49 282.51 208 256 208C229.49 208 208 229.49 208 256C208 282.51 229.49 304 256 304ZM416 304C442.51 304 464 282.51 464 256C464 229.49 442.51 208 416 208C389.49 208 368 229.49 368 256C368 282.51 389.49 304 416 304Z" fill="currentColor"/>
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
