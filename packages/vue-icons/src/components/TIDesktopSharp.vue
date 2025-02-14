<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M480 48H32C23.1634 48 16 55.1634 16 64V384C16 392.837 23.1634 400 32 400H200V432H128V464H384V432H312V400H480C488.837 400 496 392.837 496 384V64C496 55.1634 488.837 48 480 48ZM460 84V300H52V84H460ZM240.13 354.08C239.241 347.286 242.778 340.68 248.924 337.652C255.071 334.624 262.464 335.846 267.309 340.691C272.154 345.536 273.376 352.929 270.348 359.076C267.32 365.222 260.714 368.759 253.92 367.87C246.729 366.93 241.07 361.271 240.13 354.08Z" fill="currentColor"/>
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
