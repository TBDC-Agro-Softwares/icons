<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M320 240H460C462.209 240 464 241.791 464 244V432C464 467.346 435.346 496 400 496H192C156.654 496 128 467.346 128 432V319.66C81.19 315.76 48 277.64 48 226.13V144C48 135.163 55.1634 128 64 128C72.8366 128 80 135.163 80 144V226.13C80 243.58 85.47 259.36 95.41 270.59C105.5 282 119.53 288 136 288C152.47 288 166.5 282 176.59 270.59C186.53 259.36 192 243.58 192 226.13V87.38C192 78.15 189.69 48 160 48C136.41 48 128 68.66 128 88V232C128 238.56 133.77 240 136 240C138.143 240.07 140.218 239.25 141.734 237.734C143.25 236.218 144.07 234.143 144 232V80C144 71.1634 151.163 64 160 64C168.837 64 176 71.1634 176 80V232C176.116 242.644 171.939 252.886 164.413 260.413C156.886 267.939 146.644 272.116 136 272C116.34 272 96 257 96 232V88C96 45.61 122.32 16 160 16C179.59 16 196.72 23.88 208.25 38.19C210.707 41.2581 212.882 44.5414 214.75 48H268C270.209 48 272 49.7909 272 52V192C272 218.51 293.49 240 320 240ZM449.81 208H320C311.163 208 304 200.837 304 192V62.19C304.003 61.3837 304.491 60.6583 305.236 60.3502C305.981 60.0421 306.838 60.2115 307.41 60.78L451.22 204.59C451.788 205.162 451.958 206.019 451.65 206.764C451.342 207.509 450.616 207.997 449.81 208Z" fill="currentColor"/>
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
