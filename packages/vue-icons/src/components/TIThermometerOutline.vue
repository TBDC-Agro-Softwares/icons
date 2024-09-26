<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M254.94 16.0086L255.998 16L256.922 16.007L258.096 16.0339C292.515 17.1446 319.998 45.3969 319.998 80L319.997 291.271L320.249 291.448C349.829 312.464 367.64 346.434 367.993 382.857L367.998 384.008C367.966 444.857 319.358 494.549 258.525 495.921C197.692 497.294 146.891 449.845 144.114 389.046C142.387 350.503 160.349 313.841 191.582 291.563L191.998 291.269V80C191.998 45.0072 220.082 16.5737 254.94 16.0086ZM256.533 48.004L255.998 48C238.325 48 223.998 62.3269 223.998 80L223.998 295.545C223.985 303.744 219.788 311.368 212.868 315.765L212.305 316.136C188.803 331.801 175.082 358.522 176.047 386.736L176.081 387.6C178.065 431.018 214.351 464.91 257.803 463.929C301.255 462.949 335.975 427.455 335.998 383.993C336.01 356.426 322.084 330.723 298.985 315.677L298.795 315.553C292.071 311.124 288.007 303.608 287.998 295.52V80C287.998 62.525 273.976 48.2871 256.533 48.004ZM255.998 96C264.73 96 271.827 102.994 271.995 111.685L271.998 112V338.731C290.641 345.321 303.998 363.1 303.998 384C303.998 410.51 282.508 432 255.998 432C229.488 432 207.998 410.51 207.998 384C207.998 363.1 221.355 345.321 239.998 338.731V112C239.998 103.163 247.162 96 255.998 96Z" fill="currentColor"/>
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
