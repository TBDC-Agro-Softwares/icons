<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M194.82 496C189.393 496.005 184.243 493.608 180.751 489.455C177.259 485.301 175.783 479.815 176.72 474.47V474.36L204.83 320H96C89.8348 319.999 84.2185 316.456 81.5625 310.893C78.9066 305.329 79.6837 298.734 83.56 293.94L302.73 22.9999C307.857 16.4916 316.694 14.1993 324.338 17.3945C331.983 20.5897 336.56 28.4889 335.53 36.7099C335.53 37.0099 335.45 37.2999 335.4 37.5999L307.19 192H416C422.165 192.001 427.782 195.543 430.438 201.107C433.093 206.671 432.316 213.266 428.44 218.06L209.24 489C205.751 493.408 200.442 495.986 194.82 496Z" fill="currentColor"/>
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
