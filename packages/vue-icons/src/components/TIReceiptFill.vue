<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M472.59 34.82C476.049 33.0356 480.033 32.5495 483.82 33.45C490.977 35.2096 496.006 41.6301 496 49V429C496 457.719 472.719 481 444 481H432C401.07 481 368 455.93 368 425V321C368 303.327 353.673 289 336 289H144V49.28C143.951 45.3896 145.299 41.6106 147.8 38.63C152.575 33.0134 160.57 31.3864 167.16 34.69L192 47.1L216.87 34.69C221.382 32.4393 226.688 32.4393 231.2 34.69L256 47.12L281.2 34.67C285.725 32.4236 291.044 32.4458 295.55 34.73L320 47.07L344.64 34.7C349.158 32.4314 354.482 32.4314 359 34.7L383.78 47.11L408.89 34.7C413.394 32.4481 418.696 32.4481 423.2 34.7L448 47.1L472.59 34.82ZM288.5 241H416C420.368 240.999 424.545 239.212 427.563 236.055C430.581 232.897 432.177 228.643 431.98 224.28C431.6 215.64 424.14 209 415.5 209H288C283.632 209.001 279.455 210.788 276.437 213.945C273.419 217.103 271.823 221.357 272.02 225.72C272.4 234.36 279.86 241 288.5 241ZM416 161H224.5C215.86 161 208.4 154.36 208.02 145.72C207.823 141.357 209.419 137.103 212.437 133.945C215.455 130.788 219.632 129.001 224 129H415.5C424.14 129 431.6 135.64 431.98 144.28C432.177 148.643 430.581 152.897 427.563 156.055C424.545 159.212 420.368 160.999 416 161ZM336 337V425C336 450.012 348.932 462.752 358.357 472.037C359.106 472.775 359.833 473.491 360.53 474.19C361.664 475.339 361.996 477.056 361.373 478.544C360.75 480.033 359.294 481.001 357.68 481H112C71.86 481 45.19 467.79 30.46 440.62C21.78 424.62 16 403.6 16 353.05C16.0274 335.38 30.3302 321.055 48 321H320C328.837 321 336 328.163 336 337Z" fill="currentColor"/>
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
