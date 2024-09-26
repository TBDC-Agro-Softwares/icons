<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M143.997 47.6851C143.829 38.9939 136.731 32 128 32C119.163 32 112 39.1634 112 48V64H96C60.6538 64 32 92.6538 32 128V416C32 451.346 60.6538 480 96 480H416C451.346 480 480 451.346 480 416V128C480 92.6538 451.346 64 416 64H400V48L399.997 47.6851C399.829 38.9939 392.731 32 384 32C375.163 32 368 39.1634 368 48V64H144V48L143.997 47.6851ZM448 208C448 192 432 176 416 176H96C80 176 64 192 64 208V416C64 433.673 78.3269 448 96 448H416C433.673 448 448 433.673 448 416V208ZM368.707 248.208C374.344 242.57 374.344 233.43 368.707 227.793C363.07 222.156 353.93 222.156 348.292 227.793L211.26 364.826L164.207 317.773C158.57 312.136 149.43 312.136 143.792 317.773C138.155 323.41 138.155 332.55 143.792 338.188L201.052 395.448C203.76 398.155 207.431 399.676 211.26 399.676C215.088 399.676 218.76 398.155 221.467 395.448L368.707 248.208Z" fill="currentColor"/>
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
