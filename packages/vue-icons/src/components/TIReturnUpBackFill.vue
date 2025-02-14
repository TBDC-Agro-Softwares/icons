<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M123.314 148.686C117.065 142.438 106.935 142.438 100.686 148.686L36.6863 212.686L36.4296 212.949C30.4391 219.215 30.5247 229.152 36.6863 235.314L100.686 299.314L100.949 299.57C107.215 305.561 117.152 305.475 123.314 299.314L123.57 299.051C129.561 292.785 129.475 282.848 123.314 276.686L86.6271 240H358L359.48 240.012C408.231 240.834 448 282.162 448 332V352L448.003 352.315C448.171 361.006 455.269 368 464 368C472.837 368 480 360.837 480 352V332L479.984 329.969C478.905 263.054 424.616 208 358 208H86.6271L123.314 171.314L123.57 171.051C129.561 164.785 129.475 154.848 123.314 148.686Z" fill="currentColor"/>
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
