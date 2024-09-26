<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M432 112C467.33 112.039 495.961 140.67 496 176V224H16V176C16.0386 140.67 44.6698 112.039 80 112H128V96C128.028 69.5018 149.502 48.0276 176 48H336C362.498 48.0276 383.972 69.5018 384 96V112H432ZM312 288C325.255 288 336 277.255 336 264V260C336 257.791 337.791 256 340 256H496V400C496 435.346 467.346 464 432 464H80C44.6538 464 16 435.346 16 400V256H172C174.209 256 176 257.791 176 260V264C176 277.255 186.745 288 200 288H312Z" fill="currentColor"/>
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
