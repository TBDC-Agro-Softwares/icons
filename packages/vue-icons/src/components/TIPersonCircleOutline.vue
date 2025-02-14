<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M259.9 48C142.92 46.42 47.4198 141.92 48.9998 258.9C50.5598 371.09 141.91 462.44 254.1 464C371.1 465.6 466.58 370.1 464.98 253.12C463.44 140.91 372.09 49.56 259.9 48ZM386.32 375.25C385.513 376.122 384.361 376.591 383.175 376.529C381.989 376.467 380.891 375.881 380.18 374.93C371.235 363.227 360.282 353.208 347.83 345.34C322.37 329 290.11 320 257 320C223.89 320 191.63 329 166.17 345.34C153.719 353.205 142.765 363.221 133.82 374.92C133.108 375.871 132.011 376.457 130.825 376.519C129.639 376.581 128.486 376.112 127.68 375.24C98.3365 343.564 81.7147 302.173 80.9998 259C79.3698 161.69 159.22 80.24 256.57 80C353.92 79.76 433 158.81 433 256C433.033 300.214 416.36 342.808 386.32 375.25ZM206.78 164.82C219.45 151.39 237.28 144 257 144C276.59 144 294.39 151.44 307.11 164.94C319.99 178.62 326.27 197.02 324.79 216.76C321.83 256 291.48 288 257 288C222.52 288 192.11 256 189.21 216.75C187.78 196.82 194.11 178.25 206.78 164.82Z" fill="currentColor"/>
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
