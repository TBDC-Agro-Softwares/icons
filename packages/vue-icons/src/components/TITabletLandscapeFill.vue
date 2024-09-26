<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 128C0.0385792 92.6698 28.6698 64.0386 64 64H448C483.33 64.0386 511.961 92.6698 512 128V384C511.961 419.33 483.33 447.961 448 448H64C28.6698 447.961 0.0385792 419.33 0 384V128ZM480 384V128C480 110.327 465.673 96 448 96H64C46.3269 96 32 110.327 32 128V384C32 401.673 46.3269 416 64 416H448C465.673 416 480 401.673 480 384ZM464 384C464 392.837 456.837 400 448 400H64C55.1634 400 48 392.837 48 384V128C48 119.163 55.1634 112 64 112H448C456.837 112 464 119.163 464 128V384Z" fill="currentColor"/>
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
