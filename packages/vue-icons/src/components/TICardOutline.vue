<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M104 80H408C447.764 80 480 112.235 480 152V360C480 399.764 447.764 432 408 432H104C64.2355 432 32 399.764 32 360V152C32 112.235 64.2355 80 104 80ZM408 112H104C81.9086 112 64 129.909 64 152V162H448V152C448 129.909 430.091 112 408 112ZM64 360V222H448V360C448 382.091 430.091 400 408 400H104C81.9086 400 64 382.091 64 360ZM128 270H176C192.569 270 206 283.431 206 300V320C206 336.569 192.569 350 176 350H128C111.431 350 98 336.569 98 320V300C98 283.431 111.431 270 128 270Z" fill="currentColor"/>
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
