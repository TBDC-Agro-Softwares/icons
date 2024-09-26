<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M480 97.22C480.058 80.09 473.23 63.6552 461.05 51.61C448.916 39.4956 432.486 32.6665 415.34 32.61H414.58C397.864 32.7289 381.91 39.6163 370.36 51.7L295.48 126.58L261.6 92.72L227.53 126.63L193.68 160.63L237.68 204.63L32 410.37V481H102.63L308.33 275.29L352 318.94L363.31 307.75C363.42 307.65 373.73 297.44 386.1 285.07L419.95 251.07L386.06 217.18L461 142.23C473.113 130.381 479.958 114.164 480 97.22ZM245 293.35L219.65 268L260.33 227.31L285.71 252.69L245 293.35Z" fill="currentColor"/>
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
