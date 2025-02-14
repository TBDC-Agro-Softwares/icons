<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M226.58 277.33C251.41 304.23 271.75 319.81 272 320L255 362L242.6 353.42C241.52 352.58 222.82 338.03 198.3 311.75C152.44 363.14 116.033 386.31 107.903 391.484C107.05 392.027 106.509 392.371 106.3 392.53L87 404L64 368L79.7 357.47C79.7254 357.451 79.8471 357.378 80.0617 357.249C84.1596 354.792 122.114 332.031 169.36 278L169.36 278C168.43 276.82 167.5 275.64 166.58 274.43C132.396 230.087 115.826 195.98 112.477 189.085C112.15 188.412 111.949 187.999 111.87 187.86L105 174L143 152L150.13 166.14C150.139 166.156 150.181 166.247 150.257 166.409C151.753 169.626 166.352 201.009 197.46 242.36C224.2 203.5 241.73 160.95 251.25 134H32V90H170V48H214V90H352V134H297.73C288.58 162.72 266.16 223.69 226.58 277.33ZM432.76 464H480L363 176L246 464H293.24L317.73 406H408.27L432.76 464ZM336.31 362L363 279.85L389.69 362H336.31Z" fill="currentColor"/>
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
