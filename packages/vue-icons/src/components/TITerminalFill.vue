<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M432 32H80C44.6698 32.0386 16.0386 60.6698 16 96V416C16.0386 451.33 44.6698 479.961 80 480H432C467.33 479.961 495.961 451.33 496 416V96C495.961 60.6698 467.33 32.0386 432 32ZM96 256C89.2061 256 83.153 251.71 80.903 245.299C78.6529 238.889 80.6965 231.756 86 227.51L150.39 176L86 124.49C81.5342 120.917 79.3136 115.234 80.1747 109.58C81.0358 103.926 84.8478 99.1609 90.1747 97.0797C95.5016 94.9986 101.534 95.9173 106 99.49L186 163.49C189.8 166.526 192.013 171.126 192.013 175.99C192.013 180.854 189.8 185.454 186 188.49L106 252.49C103.162 254.762 99.6353 256 96 256ZM256 256H192C183.163 256 176 248.837 176 240C176 231.163 183.163 224 192 224H256C264.837 224 272 231.163 272 240C272 248.837 264.837 256 256 256Z" fill="currentColor"/>
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
