<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M68 240H204C223.882 240 240 223.882 240 204V68C240 48.1177 223.882 32 204 32H68C48.1177 32 32 48.1177 32 68V204C32 223.882 48.1177 240 68 240ZM308 240H444C463.882 240 480 223.882 480 204V68C480 48.1177 463.882 32 444 32H308C288.118 32 272 48.1177 272 68V204C272 223.882 288.118 240 308 240ZM204 480H68C48.1177 480 32 463.882 32 444V308C32 288.118 48.1177 272 68 272H204C223.882 272 240 288.118 240 308V444C240 463.882 223.882 480 204 480ZM308 480H444C463.882 480 480 463.882 480 444V308C480 288.118 463.882 272 444 272H308C288.118 272 272 288.118 272 308V444C272 463.882 288.118 480 308 480Z" fill="currentColor"/>
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
