<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M96 208C69.4903 208 48 229.49 48 256C48 282.51 69.4903 304 96 304C122.51 304 144 282.51 144 256C144 229.49 122.51 208 96 208ZM96 240C104.837 240 112 247.163 112 256C112 264.837 104.837 272 96 272C87.1634 272 80 264.837 80 256C80 247.163 87.1634 240 96 240ZM208 256C208 229.49 229.49 208 256 208C282.51 208 304 229.49 304 256C304 282.51 282.51 304 256 304C229.49 304 208 282.51 208 256ZM272 256C272 247.163 264.837 240 256 240C247.163 240 240 247.163 240 256C240 264.837 247.163 272 256 272C264.837 272 272 264.837 272 256ZM368 256C368 229.49 389.49 208 416 208C442.51 208 464 229.49 464 256C464 282.51 442.51 304 416 304C389.49 304 368 282.51 368 256ZM432 256C432 247.163 424.837 240 416 240C407.163 240 400 247.163 400 256C400 264.837 407.163 272 416 272C424.837 272 432 264.837 432 256Z" fill="currentColor"/>
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
