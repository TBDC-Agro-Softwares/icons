<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M512 180C512 165.641 500.538 154 486.4 154H25.6L25.0962 154.005C11.1902 154.278 0 165.812 0 180C0 194.359 11.4615 206 25.6 206H486.4L486.904 205.995C500.81 205.722 512 194.188 512 180ZM512 332C512 317.641 500.538 306 486.4 306H25.6L25.0962 306.005C11.1902 306.278 0 317.812 0 332C0 346.359 11.4615 358 25.6 358H486.4L486.904 357.995C500.81 357.722 512 346.188 512 332Z" fill="currentColor"/>
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
