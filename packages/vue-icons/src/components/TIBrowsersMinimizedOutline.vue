<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="20" height="20" viewBox="0 0 20 20"  fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 1.875H16.25C17.6307 1.875 18.75 2.99429 18.75 4.375V15.625C18.75 17.0057 17.6307 18.125 16.25 18.125H3.75C2.36929 18.125 1.25 17.0057 1.25 15.625V4.375C1.25 2.99429 2.36929 1.875 3.75 1.875ZM2.5 6.79688C2.5 6.10652 3.05964 5.54688 3.75 5.54688H16.25C16.9404 5.54688 17.5 6.10652 17.5 6.79688V9.375C17.5 10.0654 16.9404 10.625 16.25 10.625H3.75C3.05964 10.625 2.5 10.0654 2.5 9.375V6.79688ZM3.75 11.875C3.05964 11.875 2.5 12.4346 2.5 13.125V15.625C2.5 16.3154 3.05964 16.875 3.75 16.875H16.25C16.9404 16.875 17.5 16.3154 17.5 15.625V13.125C17.5 12.4346 16.9404 11.875 16.25 11.875H3.75Z" fill="currentColor"/>
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
