<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M436 48H76C51.6995 48 32 67.6995 32 92V116C32 136.14 45.532 153.12 64 158.344V408L64.0102 408.926C64.5928 439.408 89.3976 463.909 119.952 464L392 464L392.926 463.99C423.408 463.407 447.909 438.602 448 408.048L448 158.344C466.468 153.12 480 136.14 480 116V92C480 67.6995 460.301 48 436 48ZM416 160H96L95.9999 407.952C96.0391 421.084 106.569 431.745 119.604 431.996L120 432L391.952 432C405.084 431.961 415.745 421.431 415.996 408.396L416 408V160ZM76 80H436C442.627 80 448 85.3726 448 92V116C448 122.627 442.627 128 436 128H76C69.3726 128 64 122.627 64 116V92C64 85.3726 69.3726 80 76 80ZM308.686 292.686C314.935 286.438 325.065 286.438 331.314 292.686C337.475 298.848 337.561 308.785 331.57 315.051L331.314 315.314L267.314 379.314C261.152 385.475 251.215 385.561 244.949 379.57L244.686 379.314L180.686 315.314C174.438 309.065 174.438 298.935 180.686 292.686C186.848 286.525 196.785 286.439 203.051 292.43L203.314 292.686L240 329.373V224C240 215.163 247.163 208 256 208C264.731 208 271.829 214.994 271.997 223.685L272 224V329.373L308.686 292.686Z" fill="currentColor"/>
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
