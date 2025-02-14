<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M63.997 159.685C63.8292 150.994 56.7314 144 48 144C39.1634 144 32 151.163 32 160V180L32.0164 182.031C33.0955 248.946 87.3844 304 154 304H425.373L388.686 340.686L388.43 340.949C382.439 347.215 382.525 357.152 388.686 363.314C394.935 369.562 405.065 369.562 411.314 363.314L475.314 299.314L475.57 299.051C481.561 292.785 481.475 282.848 475.314 276.686L411.314 212.686L411.051 212.43C404.785 206.439 394.848 206.525 388.686 212.686L388.43 212.949C382.439 219.215 382.525 229.152 388.686 235.314L425.373 272H154L152.52 271.988C103.769 271.166 64 229.838 64 180V160L63.997 159.685Z" fill="currentColor"/>
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
