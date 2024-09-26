<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="510" viewBox="0 0 512 510" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M106.668 339.619H170.668V403.273H213.335V297.183H106.668V339.619ZM170.668 169.875H106.668V212.311H213.335V106.22H170.668V169.875ZM298.668 403.273H341.335V339.619H405.335V297.183H298.668V403.273ZM341.335 169.875V106.22H298.668V212.311H405.335V169.875H341.335Z" fill="currentColor"/>
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
