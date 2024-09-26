<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M384 0C419.33 0.0385792 447.961 28.6698 448 64V448C447.961 483.33 419.33 511.961 384 512H128C92.6698 511.961 64.0386 483.33 64 448V64C64.0386 28.6698 92.6698 0.0385792 128 0H384ZM128 480H384C401.673 480 416 465.673 416 448V64C416 46.3269 401.673 32 384 32H128C110.327 32 96 46.3269 96 64V448C96 465.673 110.327 480 128 480ZM128 464C119.163 464 112 456.837 112 448V64C112 55.1634 119.163 48 128 48H384C392.837 48 400 55.1634 400 64V448C400 456.837 392.837 464 384 464H128Z" fill="currentColor"/>
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
