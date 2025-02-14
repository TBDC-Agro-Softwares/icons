<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M320 291.24V80C320 44.6538 291.346 16 256 16C220.654 16 192 44.6538 192 80V291.24C161.865 312.512 143.96 347.113 144 384C144 445.856 194.144 496 256 496C317.856 496 368 445.856 368 384C368.04 347.113 350.135 312.512 320 291.24ZM256 432C232.617 432.007 212.631 415.163 208.677 392.116C204.723 369.07 217.951 346.527 240 338.74V96H272V338.74C294.049 346.527 307.277 369.07 303.324 392.116C299.37 415.163 279.383 432.007 256 432Z" fill="currentColor"/>
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
