<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M411.051 148.43C404.785 142.439 394.848 142.525 388.686 148.686L388.43 148.949C382.439 155.215 382.525 165.152 388.686 171.314L425.373 208H154L151.985 208.017C85.6228 209.125 32 264.85 32 332V352L32.003 352.315C32.1708 361.006 39.2686 368 48 368C56.8366 368 64 360.837 64 352V332L64.0121 330.492C64.8124 280.83 105.07 240 154 240H425.373L388.686 276.686L388.43 276.949C382.439 283.215 382.525 293.152 388.686 299.314C394.935 305.562 405.065 305.562 411.314 299.314L475.314 235.314L475.57 235.051C481.561 228.785 481.475 218.848 475.314 212.686L411.314 148.686L411.051 148.43Z" fill="currentColor"/>
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
