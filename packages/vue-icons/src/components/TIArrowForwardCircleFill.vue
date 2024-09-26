<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M464 256C464 141.13 370.87 48 256 48C141.13 48 48 141.13 48 256C48 370.87 141.13 464 256 464C370.87 464 464 370.87 464 256ZM251.35 347.36C248.337 344.371 246.634 340.308 246.617 336.064C246.6 331.82 248.271 327.743 251.26 324.73L303.58 272H170C161.163 272 154 264.837 154 256C154 247.163 161.163 240 170 240H303.58L251.26 187.27C247.234 183.208 245.68 177.306 247.185 171.788C248.69 166.27 253.024 161.974 258.555 160.518C264.086 159.062 269.974 160.668 274 164.73L353.39 244.73C359.58 250.968 359.58 261.032 353.39 267.27L274 347.27C271.01 350.289 266.943 351.996 262.694 352.013C258.445 352.03 254.363 350.356 251.35 347.36Z" fill="currentColor"/>
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
