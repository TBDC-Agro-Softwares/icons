<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M65.3711 64L87.9985 41.3726L446.626 400L423.999 422.627L65.3711 64ZM359.999 192V240C360.001 248.568 359.018 257.107 357.069 265.45L382.648 291C388.845 274.711 392.014 257.428 391.999 240V192H359.999ZM263.999 383.11V432H327.999V464H167.999V432H231.999V383.11C160.099 375.12 103.999 314 103.999 240V192H135.999V240C136.091 278.561 155.992 314.369 188.689 334.81C221.386 355.25 262.293 357.456 296.999 340.65L320.648 364.28C303.299 374.469 283.996 380.885 263.999 383.11ZM327.999 236.37V128C327.999 83.14 292.859 48 247.999 48C219.636 47.8982 193.358 62.8808 178.999 87.34L327.999 236.37ZM167.999 239V211.63L272.449 316.11C243.807 325.466 212.338 317.614 191.449 295.9C176.44 280.764 168.013 260.316 167.999 239Z" fill="currentColor"/>
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
