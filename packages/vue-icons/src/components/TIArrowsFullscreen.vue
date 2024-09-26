<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="513" viewBox="0 0 512 513" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M149.331 298.797H106.664V405.464H213.331V362.797H149.331V298.797ZM106.664 213.464H149.331V149.464H213.331V106.797H106.664V213.464ZM362.664 362.797H298.664V405.464H405.331V298.797H362.664V362.797ZM298.664 106.797V149.464H362.664V213.464H405.331V106.797H298.664Z" fill="currentColor"/>
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
