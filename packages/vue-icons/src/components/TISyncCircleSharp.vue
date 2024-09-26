<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 48C141.13 48 48 141.13 48 256C48 370.87 141.13 464 256 464C370.87 464 464 370.87 464 256C464 141.13 370.87 48 256 48ZM256 368C199.455 367.976 151.766 325.875 144.73 269.77L135.87 278.63L113.24 256L159.24 210L206.79 255.48L184.67 278.6L177.47 271.72C183.521 301.469 205.839 325.257 235.141 333.192C264.443 341.127 295.715 331.85 315.95 309.22L339.72 330.63C318.361 354.375 287.938 367.955 256 368ZM352.79 302L305.24 256.5L327.36 233.38L334.22 239.93C328.08 210.304 305.79 186.655 276.579 178.774C247.368 170.893 216.208 180.122 196 202.64L172.18 181.27C201.554 148.545 247.34 136.001 289.291 149.184C331.243 162.367 361.624 198.846 367 242.49L376.11 233.37L398.76 256L352.79 302Z" fill="currentColor"/>
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
