<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M228.952 76.4582L52.9524 244.458C46.3492 250.761 46.3492 261.302 52.9524 267.606L228.952 435.606L229.26 435.892C239.47 445.18 256 437.967 256 424.032V344.262L257.304 344.303C302.449 345.765 335.504 353.168 362.073 366.905C388.092 380.356 408.733 399.749 435.39 433.88C444.757 445.874 464 439.25 464 424.032C464 353.384 450.706 294.498 420.354 250.268L419.246 248.67C385.052 199.915 331.366 172.137 257.268 168.453L256 168.394V88.0318C256 73.9561 239.134 66.7392 228.952 76.4582ZM87.172 256.032L224 125.423V184.032C224 192.868 231.163 200.032 240 200.032C313.776 200.032 363.491 223.959 393.969 268.374L394.747 269.519C413.849 297.879 425.208 334.349 429.727 377.736L429.797 378.421L429.768 378.391C412.82 361.1 396.203 348.526 376.769 338.479C341.86 320.431 298.908 312.032 240 312.032L239.685 312.035C230.994 312.203 224 319.3 224 328.032V386.64L87.172 256.032Z" fill="currentColor"/>
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
