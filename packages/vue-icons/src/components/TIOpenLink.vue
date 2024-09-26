<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="513" viewBox="0 0 512 513" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M362.664 363.58H149.331V150.246H213.331V107.58H149.331C127.997 107.58 106.664 128.913 106.664 150.246V363.58C106.664 384.913 127.997 406.246 149.331 406.246H362.664C383.997 406.246 405.331 384.913 405.331 363.58V299.58H362.664V363.58ZM298.664 107.58V150.246H332.797L209.064 273.98L238.931 303.846L362.664 180.113V214.246H405.331V107.58H298.664Z" fill="currentColor"/>
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
