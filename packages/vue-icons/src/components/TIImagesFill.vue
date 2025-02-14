<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M64 32H384C413.183 32.0241 438.667 51.7537 446 80H120C80.2355 80 48 112.235 48 152V414C19.7537 406.667 0.0240737 381.183 0 352V96C0 60.6538 28.6538 32 64 32ZM450.29 112H142C108 112 80 139.51 80 173.33V418.67C80 452.49 108 480 142 480H450C484 480 512 453.82 512 420V173.33C512 139.51 484.32 112 450.29 112ZM373.14 173.34C398.508 173.494 418.962 194.157 418.86 219.526C418.757 244.894 398.136 265.39 372.767 265.339C347.399 265.288 326.86 244.709 326.86 219.34C326.959 193.865 347.665 173.28 373.14 173.33V173.34ZM111.73 418.68C111.73 435.59 124.59 449.34 141.59 449.34L215.27 449.33L328.27 337L265.63 274.89C248.243 257.72 220.538 256.921 202.19 273.06L111.73 353.85V418.68ZM480 418.67C479.997 426.809 476.759 434.614 470.999 440.365C465.239 446.115 457.429 449.341 449.29 449.33H259L376.08 333C393.23 318.532 418.292 318.465 435.52 332.84L480 370.59V418.67Z" fill="currentColor"/>
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
