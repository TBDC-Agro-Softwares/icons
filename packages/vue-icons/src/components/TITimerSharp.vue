<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 48C141.12 48 48 141.12 48 256C48 370.88 141.12 464 256 464C370.88 464 464 370.88 464 256C464 141.12 370.88 48 256 48ZM256 432C159 432 80 353.05 80 256C79.8334 208.163 99.3074 162.354 133.87 129.28L279 233L260 263L135 172C122 195 108.3 218 108.3 256C108.3 337.44 174.56 403.7 256 403.7C337.44 403.7 403.7 337.44 403.7 256C403.7 179.33 344.98 116.12 270.15 109V164H241.85V79.89C246.09 79.96 250.79 80 256 80C353.05 80 432 159 432 256C432 353 353.05 432 256 432Z" fill="currentColor"/>
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
