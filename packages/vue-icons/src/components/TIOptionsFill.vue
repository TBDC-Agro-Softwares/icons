<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M64 144H290.75C297.535 163.171 315.664 175.986 336 175.986C356.336 175.986 374.465 163.171 381.25 144H448C456.837 144 464 136.837 464 128C464 119.163 456.837 112 448 112H381.25C374.465 92.8288 356.336 80.0137 336 80.0137C315.664 80.0137 297.535 92.8288 290.75 112H64C55.1634 112 48 119.163 48 128C48 136.837 55.1634 144 64 144ZM448 368H381.25C374.465 348.829 356.336 336.014 336 336.014C315.664 336.014 297.535 348.829 290.75 368H64C55.1634 368 48 375.163 48 384C48 392.837 55.1634 400 64 400H290.75C297.535 419.171 315.664 431.986 336 431.986C356.336 431.986 374.465 419.171 381.25 400H448C456.837 400 464 392.837 464 384C464 375.163 456.837 368 448 368ZM221.25 240H448C456.837 240 464 247.163 464 256C464 264.837 456.837 272 448 272H221.25C214.465 291.171 196.336 303.986 176 303.986C155.664 303.986 137.535 291.171 130.75 272H64C55.1634 272 48 264.837 48 256C48 247.163 55.1634 240 64 240H130.75C137.535 220.829 155.664 208.014 176 208.014C196.336 208.014 214.465 220.829 221.25 240Z" fill="currentColor"/>
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
