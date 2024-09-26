<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M455.27 32H56.73C43.0743 32.0055 32.0055 43.0743 32 56.73V455.27C32.0055 468.926 43.0743 479.994 56.73 480H256V304H202.45V240H256V189C256 131.14 296.13 99.64 347.82 99.64C372.55 99.64 399.15 101.5 405.33 102.32V162.75H364.15C336.03 162.75 330.67 176.05 330.67 195.65V240H397.67L388.92 304H330.67V480H455.27C468.926 479.994 479.994 468.926 480 455.27V56.73C479.994 43.0743 468.926 32.0055 455.27 32Z" fill="currentColor"/>
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
