<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M307.201 234.667L341.335 268.8V234.667H307.201ZM362.668 149.334H277.335V189.867H362.668C398.935 189.867 428.801 219.734 428.801 256C428.801 283.734 411.735 307.2 388.268 315.734L418.135 345.6C448.001 328.534 469.335 294.4 469.335 256C469.335 196.267 422.401 149.334 362.668 149.334ZM42.668 91.7336L108.801 157.867C70.4013 172.8 42.668 211.2 42.668 256C42.668 315.734 89.6013 362.667 149.335 362.667H234.668V322.134H149.335C113.068 322.134 83.2013 292.267 83.2013 256C83.2013 221.867 108.801 194.134 142.935 189.867L185.601 234.667H170.668V277.334H228.268L277.335 326.4V362.667H313.601L398.935 448L428.801 418.134L72.5346 61.8669L42.668 91.7336Z" fill="currentColor"/>
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
