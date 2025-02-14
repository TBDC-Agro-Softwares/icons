<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M400 288L448 352L448.05 380.17L166.05 98.17C178.708 89.4241 192.961 83.2505 208 80L216 32H296L304 80C372.64 95.61 400 157 400 227.47V288ZM63.9975 41.3719L41.3701 63.9993L447.999 470.628L470.626 448.001L63.9975 41.3719ZM329.3 432C316.56 461.131 287.795 479.968 256 480C224.204 479.968 195.439 461.131 182.7 432H329.3ZM112 227.47V288L63.9996 352V400H332.12L115.87 183.75C113.229 198.172 111.933 212.808 112 227.47Z" fill="currentColor"/>
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
