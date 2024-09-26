<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 256C48 370.87 141.13 464 256 464C370.87 464 464 370.87 464 256C464 141.13 370.87 48 256 48C141.13 48 48 141.13 48 256ZM260.65 164.64C263.663 167.629 265.366 171.692 265.383 175.936C265.4 180.18 263.729 184.257 260.74 187.27L208.42 240H342C350.837 240 358 247.163 358 256C358 264.837 350.837 272 342 272H208.42L260.74 324.73C264.766 328.792 266.32 334.694 264.815 340.212C263.31 345.73 258.976 350.026 253.445 351.482C247.914 352.938 242.026 351.332 238 347.27L158.61 267.27C152.42 261.032 152.42 250.968 158.61 244.73L238 164.73C240.99 161.711 245.057 160.004 249.306 159.987C253.555 159.97 257.637 161.644 260.65 164.64Z" fill="currentColor"/>
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
