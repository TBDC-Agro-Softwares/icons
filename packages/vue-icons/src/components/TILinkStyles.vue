<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M405.335 381.867L424.535 458.667L356.268 418.133L285.868 458.667L302.935 381.867L241.068 320H322.135L358.401 245.333L388.268 320H469.335L405.335 381.867ZM426.668 256C426.668 262.4 424.535 270.933 422.401 277.333H467.201C469.335 270.933 469.335 264.533 469.335 256C469.335 196.267 422.401 149.333 362.668 149.333H277.335V192H362.668C398.935 192 426.668 219.733 426.668 256ZM315.735 234.667H170.668V277.333H241.068H294.401L315.735 234.667ZM211.201 349.867L181.335 320H149.335C113.068 320 85.3346 292.267 85.3346 256C85.3346 219.733 113.068 192 149.335 192H234.668V149.333H149.335C89.6013 149.333 42.668 196.267 42.668 256C42.668 315.733 89.6013 362.667 149.335 362.667H224.001L211.201 349.867Z" fill="currentColor"/>
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
