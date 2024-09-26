<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M466.025 48L46.082 48.0001C34.3507 47.9766 23.682 54.7933 18.7738 65.4485C13.8656 76.1037 15.6185 88.6423 23.2607 97.5429L191.983 294.067C191.994 294.079 192 294.096 192 294.112L192.001 413.163C191.899 423.512 198.462 432.753 208.266 436.067L288.488 462.762C295.789 465.205 303.851 463.97 310.108 459.436L310.453 459.181C316.386 454.718 319.913 447.751 319.999 440.327L320 440L319.999 294.17C319.999 294.153 320.005 294.137 320.017 294.124L488.741 97.5407C496.369 88.657 498.13 76.1435 493.249 65.4971C488.367 54.8508 477.737 48.0185 466.025 48ZM50.374 79.9991H461.626L295.641 273.391C290.787 279.098 288.081 286.328 288.001 293.83L288 428.874L224 407.578L224 293.888L223.992 293.366C223.822 286.063 221.163 279.036 216.456 273.45L50.374 79.9991Z" fill="currentColor"/>
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
