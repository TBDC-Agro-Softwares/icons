<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="515" viewBox="0 0 512 515" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M407.464 291.71L287.997 411.826L230.397 353.913L200.531 383.942L287.997 471.884L437.331 321.739L407.464 291.71ZM230.397 293.855L287.997 351.768L305.064 334.609L223.997 107.247H181.331L74.6641 407.536H117.331L147.197 321.739H202.664L230.397 293.855ZM202.664 167.305L243.197 278.841H162.131L202.664 167.305Z" fill="currentColor"/>
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
