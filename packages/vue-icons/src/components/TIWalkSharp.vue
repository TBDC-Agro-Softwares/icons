<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M215.46 61.38C215.46 36.3173 235.777 16 260.84 16C285.903 16 306.22 36.3173 306.22 61.38C306.22 86.4427 285.903 106.76 260.84 106.76C235.777 106.76 215.46 86.4427 215.46 61.38ZM220.558 120.17C251.314 120.223 276.285 144.906 276.812 175.559L276.82 176.49V355.01H275.13L338.346 482.797L309.663 496.986L246.345 368.993L202.355 312.725C202.034 312.315 201.734 311.889 201.455 311.45L201.184 311.007C193.221 297.525 188.953 282.188 188.804 266.539L188.8 265.7V174.617L146 217.515V301.67H114V210.9C114 206.8 115.574 202.861 118.388 199.893L118.673 199.599L194.924 123.173L195.155 123.403C197.759 121.433 200.984 120.241 204.485 120.173L204.8 120.17L220.558 120.17ZM294.22 233.52L378.17 289.9L398.9 261.79L294.22 188.84V233.52ZM176.95 492.75L155.52 465.84L235.85 384.3L251.38 416.37L176.95 492.75Z" fill="currentColor"/>
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
