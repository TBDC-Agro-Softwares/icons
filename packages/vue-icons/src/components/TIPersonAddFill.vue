<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M288 256C340.79 256 387.43 206.29 392 145.18C394.27 114.48 384.64 85.85 364.88 64.58C345.33 43.57 318 32 288 32C257.76 32 230.41 43.5 211 64.38C191.37 85.49 181.8 114.18 184 145.16C188.49 206.28 235.12 256 288 256ZM495.38 439.76C486.94 392.94 460.59 353.61 419.19 326.01C382.42 301.5 335.83 288 288 288C240.17 288 193.58 301.5 156.81 326C115.41 353.6 89.06 392.93 80.62 439.75C78.69 450.48 81.31 461.09 87.81 468.86C93.7808 476.031 102.669 480.125 112 480H464C473.336 480.133 482.233 476.043 488.21 468.87C494.69 461.1 497.31 450.49 495.38 439.76ZM104 248V288C104 296.837 96.8366 304 88 304C79.1634 304 72 296.837 72 288V248H32C23.1634 248 16 240.837 16 232C16 223.163 23.1634 216 32 216H72V176C72 167.163 79.1634 160 88 160C96.8366 160 104 167.163 104 176V216H144C152.837 216 160 223.163 160 232C160 240.837 152.837 248 144 248H104Z" fill="currentColor"/>
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
