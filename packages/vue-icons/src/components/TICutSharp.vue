<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M481 129H433L234.06 199.46L174.93 167.87C182.235 133.563 163.812 98.9707 131.266 85.8878C98.7207 72.8049 61.4812 85.0208 43.009 114.84C24.5367 144.658 30.1831 183.441 56.3909 206.755C82.5986 230.069 121.775 231.16 149.24 209.34L201.44 241.06L193 278L149.36 304.76C121.803 282.882 82.4466 284.219 56.4374 307.916C30.4282 331.612 25.4435 370.674 44.6682 400.144C63.8928 429.613 101.652 440.79 133.82 426.534C165.988 412.278 183.069 376.796 174.15 342.76L481 161V129ZM104.48 193C82.3882 193 64.4796 175.091 64.4796 153C64.4796 130.909 82.3882 113 104.48 113C126.571 113 144.48 130.909 144.48 153C144.48 163.609 140.265 173.783 132.764 181.284C125.262 188.786 115.088 193 104.48 193ZM64.4796 361C64.4796 383.091 82.3882 401 104.48 401C115.088 401 125.262 396.786 132.764 389.284C140.265 381.783 144.48 371.609 144.48 361C144.48 338.909 126.571 321 104.48 321C82.3882 321 64.4796 338.909 64.4796 361ZM256.48 257C247.643 257 240.48 249.837 240.48 241C240.48 232.163 247.643 225 256.48 225C265.316 225 272.48 232.163 272.48 241C272.48 245.244 270.794 249.313 267.793 252.314C264.793 255.314 260.723 257 256.48 257ZM261.05 309.05L344.79 260.87L481 337L480.99 369H433L261.05 309.05Z" fill="currentColor"/>
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
