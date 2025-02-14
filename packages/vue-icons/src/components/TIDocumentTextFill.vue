<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M288 224H428C430.209 224 432 225.791 432 228V416C432 451.346 403.346 480 368 480H144C108.654 480 80 451.346 80 416V96C80 60.6538 108.654 32 144 32H236C238.209 32 240 33.7909 240 36V176C240 202.51 261.49 224 288 224ZM176 384H336C344.837 384 352 376.837 352 368C352 359.163 344.837 352 336 352H176C167.163 352 160 359.163 160 368C160 376.837 167.163 384 176 384ZM336 304H176C167.163 304 160 296.837 160 288C160 279.163 167.163 272 176 272H336C344.837 272 352 279.163 352 288C352 296.837 344.837 304 336 304ZM275.41 44.78L419.22 188.59C419.788 189.162 419.958 190.019 419.65 190.764C419.342 191.509 418.616 191.997 417.81 192H288C279.163 192 272 184.837 272 176V46.19C272.003 45.3837 272.491 44.6583 273.236 44.3502C273.981 44.0421 274.838 44.2115 275.41 44.78Z" fill="currentColor"/>
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
