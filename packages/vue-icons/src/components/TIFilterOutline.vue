<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M480 128C488.837 128 496 135.163 496 144C496 152.731 489.006 159.829 480.315 159.997L480 160H32C23.1634 160 16 152.837 16 144C16 135.269 22.9939 128.171 31.6851 128.003L32 128H480ZM400 240C408.837 240 416 247.163 416 256C416 264.731 409.006 271.829 400.315 271.997L400 272H112C103.163 272 96 264.837 96 256C96 247.269 102.994 240.171 111.685 240.003L112 240H400ZM320 368C320 359.163 312.837 352 304 352H208L207.685 352.003C198.994 352.171 192 359.269 192 368C192 376.837 199.163 384 208 384H304L304.315 383.997C313.006 383.829 320 376.731 320 368Z" fill="currentColor"/>
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
