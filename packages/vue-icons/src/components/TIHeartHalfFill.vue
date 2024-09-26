<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M352.919 64C304.829 64 272.919 93.54 255.999 115C239.119 93.51 207.169 64 159.079 64C98.4594 64 48.6294 114.54 47.9994 176.65C47.4594 230.86 66.6294 280.92 106.609 329.65C125.379 352.53 159.409 389.11 237.999 442.46C248.848 449.895 263.151 449.895 273.999 442.46C352.589 389.11 386.619 352.53 405.389 329.65C445.389 280.91 464.539 230.85 463.999 176.65C463.369 114.54 413.539 64 352.919 64ZM255.999 416V207.58C255.999 187.95 261.229 168.82 270.209 151.36C270.232 151.305 270.259 151.251 270.289 151.2C276.114 140.684 283.448 131.078 292.059 122.69C310.189 105 330.659 96 352.919 96C396.069 96 431.539 132.32 431.989 177C432.999 281.61 343.629 356.51 255.999 416Z" fill="currentColor"/>
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
