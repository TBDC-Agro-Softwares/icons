<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M316.826 16.0042C311.321 16.1218 306.18 18.7002 302.787 22.9877L302.723 23.069L83.5615 293.936L83.3123 294.251C75.2463 304.708 82.6772 320 95.9999 320H204.827L176.748 474.367C175.789 479.803 177.265 485.299 180.764 489.459C183.934 493.228 188.475 495.553 193.36 495.942L193.677 495.964L194.185 495.987C194.396 495.996 194.608 496 194.82 496L195.215 495.996C200.606 495.88 205.664 493.398 209.056 489.231L209.259 488.976L428.439 218.064L428.688 217.748C436.753 207.291 429.322 192 416 192H307.188L335.399 37.6263C335.455 37.322 335.502 37.0162 335.54 36.7093C336.188 31.4512 334.545 26.1679 331.029 22.205C327.843 18.614 323.395 16.4205 318.638 16.0545L318.332 16.0338L317.834 16.0118C317.629 16.0039 317.425 16 317.22 16L316.826 16.0042ZM294.338 84.306L272.261 205.124L272.207 205.431C270.623 215.137 278.116 224 288 224H382.474L217.786 427.56L239.742 306.863L239.794 306.557C241.371 296.854 233.879 288 224 288H129.527L294.338 84.306Z" fill="currentColor"/>
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
