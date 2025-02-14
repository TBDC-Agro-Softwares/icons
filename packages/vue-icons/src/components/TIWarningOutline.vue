<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M43.7367 391.744L214.159 75.2406C232.291 41.5859 280.558 41.5859 298.692 75.2441L469.112 391.745C477.12 406.619 476.72 424.607 468.059 439.111C459.397 453.615 443.748 462.5 426.854 462.5H85.9943C69.1009 462.5 53.4517 453.615 44.7895 439.111C36.1281 424.607 35.7281 406.619 43.7367 391.744ZM440.937 406.915L270.519 90.4185C264.471 79.1932 248.378 79.1932 242.332 90.4151L71.9121 406.915C69.2427 411.873 69.376 417.869 72.2632 422.703C75.1508 427.539 80.3664 430.5 85.9943 430.5H426.854C432.482 430.5 437.698 427.539 440.585 422.703C443.473 417.869 443.606 411.873 440.937 406.915ZM256.598 173.691C256.467 173.689 256.336 173.689 256.205 173.69C250.339 173.748 244.746 176.174 240.695 180.418C236.644 184.662 234.48 190.363 234.695 196.226L240.442 318.392C241.399 338.723 271.451 338.722 272.407 318.391L278.137 196.441C278.409 190.448 276.212 184.632 272.064 180.333C268.167 176.295 262.862 173.922 257.262 173.705L256.875 173.695L256.598 173.691ZM236.424 377.5C236.424 388.545 245.379 397.5 256.424 397.5C267.47 397.5 276.424 388.545 276.424 377.5C276.424 366.454 267.47 357.5 256.424 357.5C245.379 357.5 236.424 366.454 236.424 377.5Z" fill="currentColor"/>
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
