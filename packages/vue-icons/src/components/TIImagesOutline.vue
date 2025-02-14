<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M384.046 32.0001C418.972 32.1015 447.325 60.1069 447.988 94.9423L448 96V112H450.01C484.246 112 512 139.754 512 173.99V402.802C512.001 402.88 512.001 402.958 512 403.036V418.01C512 452.246 484.246 480 450.01 480H141.99C107.754 480 80 452.246 80 418.01V416L63.9535 416C29.0283 415.899 0.674645 387.893 0.0115948 353.058L0 352L6.74644e-05 95.9535C0.10149 61.0283 28.1069 32.6746 62.9423 32.0116L64 32L384.046 32.0001ZM480 368.906V173.99C480 157.427 466.573 144 450.01 144H141.99C125.427 144 112 157.427 112 173.99V352.186L202.246 272.562C220.564 256.431 248.148 257.055 265.734 273.901L266.264 274.417L349.938 357.361L372.585 334.878C389.55 318.147 416.314 316.78 434.918 331.618L435.479 332.072L480 368.906ZM327.228 379.907L243.755 297.162C238.261 291.734 229.554 291.403 223.679 296.333L223.406 296.568L112 394.861V418.01C112 434.573 125.427 448 141.99 448H258.637L327.228 379.907ZM304.057 448L395.092 357.625L395.349 357.377C400.794 352.257 409.277 351.954 415.116 356.757L480 410.439V418.01C480 434.573 466.573 448 450.01 448H304.057ZM416 96.0465L416 112H141.99C107.754 112 80 139.754 80 173.99V384H64L63.4721 383.994C46.084 383.662 32.0508 369.454 31.9999 351.954L32 96L32.0058 95.4721C32.338 78.084 46.5457 64.0508 64.0465 63.9999L384 64L384.528 64.0058C401.916 64.338 415.949 78.5457 416 96.0465ZM372.92 173.09C347.115 173.09 326.15 193.905 326.15 219.64C326.15 245.375 347.115 266.19 372.92 266.19C398.725 266.19 419.69 245.375 419.69 219.64C419.69 193.905 398.725 173.09 372.92 173.09ZM372.92 205.09C381.103 205.09 387.69 211.63 387.69 219.64C387.69 227.65 381.103 234.19 372.92 234.19C364.737 234.19 358.15 227.65 358.15 219.64C358.15 211.63 364.737 205.09 372.92 205.09Z" fill="currentColor"/>
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
