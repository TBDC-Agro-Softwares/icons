<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 48C141.31 48 48 141.31 48 256C48 370.69 141.31 464 256 464C370.69 464 464 370.69 464 256C464 141.31 370.69 48 256 48ZM376 238.77H287L323.88 201.89L318.28 195.38C290.703 166.751 247.278 160.343 212.607 179.786C177.937 199.23 160.758 239.624 170.804 278.084C180.851 316.544 215.59 343.377 255.34 343.38C292.367 343.345 325.368 320.022 337.76 285.13L343.13 270L373.3 280.67L368 295.8C347.771 353.049 287.798 386 228.629 372.375C169.459 358.75 129.937 302.889 136.783 242.558C143.629 182.227 194.662 136.641 255.38 136.62C288.031 136.495 319.284 149.867 341.74 173.57L342.3 174.19L346.61 179.19L376 149.81V238.77Z" fill="currentColor"/>
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
