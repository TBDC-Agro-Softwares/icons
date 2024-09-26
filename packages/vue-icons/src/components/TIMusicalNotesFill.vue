<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M421.84 38.37C415.421 33.4248 407.056 31.774 399.24 33.91L199.92 87.49C185.695 91.3107 175.856 104.271 176 119V345C176 351.74 171.64 357.56 164.89 359.83L164.77 359.88L112.77 377.88C92.8799 384.53 79.9999 403 79.9999 424.91C79.8521 442.995 88.5191 460.019 103.23 470.54C112.565 477.321 123.802 480.982 135.34 481C141.376 480.989 147.371 480 153.09 478.07L153.47 477.94L175.31 470C194.734 463.515 207.877 445.387 208 424.91V212.91C208 205.62 212.77 199.7 220.16 197.84L220.37 197.78L395 151.14C396.196 150.831 397.467 151.092 398.444 151.847C399.422 152.601 399.996 153.765 400 155V296.93C400 303.68 395.75 309.31 388.89 311.61L388.64 311.7L337.75 329.81C317.442 336.489 303.792 355.543 304 376.92C303.819 395.06 312.487 412.15 327.23 422.72C341.664 433.155 360.279 435.898 377.11 430.07L377.47 429.95L399.31 422C418.732 415.519 431.875 397.395 432 376.92V59C432.044 50.9087 428.281 43.2675 421.84 38.37Z" fill="currentColor"/>
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
