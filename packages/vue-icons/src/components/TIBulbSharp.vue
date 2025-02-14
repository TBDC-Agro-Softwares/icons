<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 16C299.07 16 339.35 32.58 369.42 62.69C399.444 92.732 416.214 133.528 416 176C416 223.61 399.08 265 367.06 295.57L362.15 300.23L362.126 300.253C344.338 317.091 320 340.129 320 360V400H272V269.29L316.39 243.29L297.29 217.61L256 240L214 217.72L195.72 244L240 269.11V400H192V360C192 339.64 167.37 316.57 149.36 299.73L145 295.64C113.87 266.23 96.0005 222.62 96.0005 176C95.8992 133.534 112.724 92.7789 142.752 62.7511C172.779 32.7233 213.535 15.8987 256 16ZM192 448V416H320V448H192ZM208 496V464H304V496H208Z" fill="currentColor"/>
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
