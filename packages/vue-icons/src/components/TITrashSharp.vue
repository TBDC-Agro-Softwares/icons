<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M447.55 96H336V48C336 39.1634 328.837 32 320 32H192C183.163 32 176 39.1634 176 48V96H64.45L64 136H97L117.09 450C118.145 466.853 132.114 479.986 149 480H363C379.876 479.998 393.849 466.891 394.93 450.05L415 136H448L447.55 96ZM176 416L167 160H200L209 416H176ZM272 416H240V160H272V416ZM296 96H216V68C216 65.7909 217.791 64 220 64H292C294.209 64 296 65.7909 296 68V96ZM336 416H303L312 160H345L336 416Z" fill="currentColor"/>
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
