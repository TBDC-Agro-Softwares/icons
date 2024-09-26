<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M432 144C440.837 144 448 151.163 448 160C448 168.731 441.006 175.829 432.315 175.997L432 176H80C71.1634 176 64 168.837 64 160C64 151.269 70.9939 144.171 79.6851 144.003L80 144H432ZM432 240C440.837 240 448 247.163 448 256C448 264.731 441.006 271.829 432.315 271.997L432 272H80C71.1634 272 64 264.837 64 256C64 247.269 70.9939 240.171 79.6851 240.003L80 240H432ZM448 352C448 343.163 440.837 336 432 336H80L79.6851 336.003C70.9939 336.171 64 343.269 64 352C64 360.837 71.1634 368 80 368H432L432.315 367.997C441.006 367.829 448 360.731 448 352Z" fill="currentColor"/>
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
