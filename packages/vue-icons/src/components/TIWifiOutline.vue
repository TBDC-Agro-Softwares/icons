<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.3491 172.148C168.656 69.2841 342.784 69.2841 458.091 172.148C464.685 178.03 465.262 188.144 459.38 194.738C453.578 201.242 443.659 201.892 437.062 196.265L436.789 196.027C334.651 104.911 180.932 104 77.762 193.293L74.6513 196.027C68.0572 201.909 57.943 201.333 52.0606 194.738C46.1781 188.144 46.755 178.03 53.3491 172.148ZM404.108 239.831C320.594 161.739 190.846 161.739 107.332 239.831C100.878 245.866 100.538 255.991 106.573 262.445C112.609 268.9 122.734 269.239 129.188 263.204L131.336 261.226C202.61 196.621 311.751 197.28 382.252 263.204L382.52 263.449C388.983 269.229 398.914 268.811 404.867 262.445C410.902 255.991 410.563 245.866 404.108 239.831ZM342.76 300.609C293.126 256.492 218.334 256.492 168.701 300.609C162.096 306.479 161.501 316.592 167.371 323.197C173.242 329.802 183.355 330.397 189.96 324.526L191.091 323.536C228.597 291.189 284.366 291.519 321.501 324.526L321.774 324.764C328.382 330.379 338.299 329.711 344.089 323.197C349.959 316.592 349.364 306.479 342.76 300.609ZM223.72 385.977C223.72 403.65 238.047 417.977 255.72 417.977C273.393 417.977 287.72 403.65 287.72 385.977C287.72 368.304 273.393 353.977 255.72 353.977C238.047 353.977 223.72 368.304 223.72 385.977Z" fill="currentColor"/>
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
