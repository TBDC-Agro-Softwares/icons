<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M479.997 159.685C479.829 150.994 472.731 144 464 144C455.163 144 448 151.163 448 160V180L447.988 181.508C447.188 231.17 406.93 272 358 272H86.6271L123.314 235.314L123.57 235.051C129.561 228.785 129.475 218.848 123.314 212.686C117.065 206.438 106.935 206.438 100.686 212.686L36.6863 276.686L36.4296 276.949C30.4391 283.215 30.5247 293.152 36.6863 299.314L100.686 363.314L100.949 363.57C107.215 369.561 117.152 369.475 123.314 363.314L123.57 363.051C129.561 356.785 129.475 346.848 123.314 340.686L86.6271 304H358L360.015 303.983C426.377 302.875 480 247.15 480 180V160L479.997 159.685Z" fill="currentColor"/>
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
