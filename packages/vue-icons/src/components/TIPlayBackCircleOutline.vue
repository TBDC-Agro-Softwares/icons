<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 48C141.163 48 48 141.163 48 256C48 370.837 141.163 464 256 464C370.837 464 464 370.837 464 256C464 141.163 370.837 48 256 48ZM256 80C353.163 80 432 158.837 432 256C432 353.163 353.163 432 256 432C158.837 432 80 353.163 80 256C80 158.837 158.837 80 256 80ZM231.68 177.56L117.23 246.7C113.986 248.677 112.006 252.201 112.006 256C112.006 259.799 113.986 263.323 117.23 265.3L231.68 334.44C235.02 336.441 239.18 336.485 242.562 334.556C245.944 332.627 248.023 329.024 248 325.13V271.81L351.68 334.44C355.02 336.441 359.18 336.485 362.562 334.556C365.944 332.627 368.023 329.024 368 325.13V186.87C368.023 182.976 365.944 179.373 362.562 177.444C359.18 175.515 355.02 175.559 351.68 177.56L248 240.19V186.87C248.023 182.976 245.944 179.373 242.562 177.444C239.18 175.515 235.02 175.559 231.68 177.56Z" fill="currentColor"/>
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
