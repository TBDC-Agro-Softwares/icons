<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M431.5 205C429.675 197.933 423.299 192.996 416 193H307.19L335.4 38.6299L335.41 38.5667C335.457 38.2891 335.502 38.0188 335.53 37.7399C336.577 29.513 332.005 21.5986 324.356 18.3943C316.707 15.19 307.859 17.4833 302.73 23.9999L210.15 138.46C208.862 140.054 208.987 142.364 210.44 143.81L361.44 294.81C362.241 295.613 363.346 296.037 364.479 295.978C365.612 295.919 366.666 295.382 367.38 294.5L428.18 219.34C431.494 215.355 432.726 210.036 431.5 205ZM432 449C427.755 449.007 423.684 447.318 420.69 444.31L68.6899 92.3099C62.7134 86.0193 62.8403 76.1114 68.9759 69.9759C75.1114 63.8403 85.0193 63.7135 91.3099 69.6899L443.31 421.69C447.883 426.266 449.25 433.145 446.775 439.122C444.3 445.099 438.469 448.997 432 449ZM150.57 219.19L301.57 370.19C303.02 371.638 303.141 373.948 301.85 375.54L209.24 490C204.025 496.581 195.011 498.787 187.345 495.36C179.68 491.933 175.314 483.745 176.74 475.47V475.36L204.83 321H95.9999C88.7009 321.004 82.3246 316.067 80.4999 309C79.2618 303.961 80.4861 298.633 83.7999 294.64L144.64 219.5C145.353 218.621 146.406 218.086 147.536 218.027C148.666 217.968 149.769 218.391 150.57 219.19Z" fill="currentColor"/>
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
