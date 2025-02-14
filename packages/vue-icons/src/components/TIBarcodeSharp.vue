<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M127.89 95.8904L128.11 127.89L80 128.22V384.219L127.89 383.89L128.11 415.89L64.11 416.33C55.3364 416.39 48.1724 409.379 48.0031 400.646L48 400.33V112.33C48 103.642 54.9266 96.5633 63.5729 96.3356L63.89 96.3304L127.89 95.8904ZM447.89 96.0004C456.664 95.9401 463.828 102.951 463.997 111.684L464 112V400C464 408.688 457.073 415.767 448.427 415.994L448.11 416L384.11 416.44L383.89 384.44L432 384.109V128.11L384.11 128.44L383.89 96.4404L447.89 96.0004ZM400 336V176H368V336H400ZM336 144V368H304V144H336ZM272 352V160H240V352H272ZM208 144V368H176V144H208ZM144 336V176H112V336H144Z" fill="currentColor"/>
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
