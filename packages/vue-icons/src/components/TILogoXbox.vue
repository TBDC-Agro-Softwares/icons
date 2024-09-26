<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M201.2 80.9001C230.5 94.0001 255.8 115.5 255.8 115.5C255.8 115.5 281.3 94.1001 310.6 80.9001C347.4 64.4001 375.5 69.6001 382.9 71.4001C306.455 18.8666 205.545 18.8666 129.1 71.4001C136.3 69.6001 164.3 64.3001 201.2 80.9001Z" fill="currentColor"/>
<path d="M204.7 155.5C204.7 155.5 166.5 189.7 126.8 248.3C77.8 320.7 77.2 386.6 77.2 391C6.4349 297.188 20.1383 164.649 108.6 87.3001L111.9 88.1001C162.6 106.6 204.7 155.5 204.7 155.5Z" fill="currentColor"/>
<path d="M403.4 87.3001C452.114 129.821 480.047 191.339 480 256C480.096 304.778 464.182 352.24 434.7 391.1C434.8 386.7 434.2 320.8 385.2 248.4C345.5 189.8 307.3 155.6 307.3 155.6C307.3 155.6 349.5 106.7 400.2 88.2001L403.4 87.3001Z" fill="currentColor"/>
<path d="M255.8 199C255.8 199 312.4 236 358.7 292.9C398.5 341.8 413.4 377.7 421.4 400.7L422.8 405.5C380.31 452.903 319.659 479.988 256 479.988C192.342 479.988 131.69 452.903 89.2 405.5L90.5 400.7C98.5 377.7 113.3 341.8 153.1 292.9C199.5 236 255.8 199 255.8 199Z" fill="currentColor"/>
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
