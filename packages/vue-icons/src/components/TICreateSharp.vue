<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M445.592 45.0063C451.612 45.1498 457.312 47.7466 461.37 52.1947C469.318 61.0365 468.872 74.5747 460.36 82.8747L442.36 100.785L411.18 69.6847L429.49 51.4347C433.756 47.185 439.573 44.8628 445.592 45.0063ZM236.49 338.995H249.76L259.14 329.595L397 191.455V466.995H45V114.995H320.54L182.4 252.855L173 262.235V275.505V306.995V338.995H205H236.49ZM397 146.155L429.79 113.295L398.7 82.2047L365.85 114.995L205 275.505V306.995H236.49L397 146.155Z" fill="currentColor"/>
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
