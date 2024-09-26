<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 48C141.163 48 48 141.163 48 256C48 370.837 141.163 464 256 464C370.837 464 464 370.837 464 256C464 141.163 370.837 48 256 48ZM256 80C353.163 80 432 158.837 432 256C432 353.163 353.163 432 256 432C158.837 432 80 353.163 80 256C80 158.837 158.837 80 256 80ZM238.022 164.73C244.246 158.458 254.377 158.418 260.65 164.642C266.835 170.78 266.959 180.716 260.993 187.006L260.738 187.27L208.415 240H342C350.837 240 358 247.163 358 256C358 264.731 351.006 271.829 342.315 271.997L342 272H208.415L260.738 324.73C266.875 330.916 266.922 340.853 260.907 347.096L260.65 347.358C254.464 353.495 244.527 353.542 238.284 347.527L238.022 347.27L158.642 267.27C152.54 261.119 152.454 251.251 158.385 244.996L158.642 244.73L238.022 164.73Z" fill="currentColor"/>
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
