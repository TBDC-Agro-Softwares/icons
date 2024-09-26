<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 145.52V366.52C16 391.716 42.0711 408.648 63.8543 395.594L244.57 287.473V366.52C244.57 391.716 270.641 408.648 292.424 395.594L481.285 282.6C500.904 270.858 500.904 241.282 481.287 229.541L292.513 116.599C270.726 103.351 244.57 120.271 244.57 145.52V224.667L63.9487 116.603C42.1695 103.347 16 120.271 16 145.52ZM48.171 144.452L234.73 256.069L48.193 367.673L48.1711 367.621C48.0688 367.354 48 366.991 48 366.52V145.52C48 145.097 48.0584 144.76 48.1566 144.491L48.171 144.452ZM276.74 144.452L463.3 256.069L276.763 367.673L276.741 367.621C276.639 367.354 276.57 366.991 276.57 366.52V145.52C276.57 145.096 276.629 144.758 276.727 144.488L276.74 144.452Z" fill="currentColor"/>
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
