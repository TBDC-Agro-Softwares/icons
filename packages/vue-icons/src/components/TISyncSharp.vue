<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M450.271 252.569C448.547 146.479 361.807 61.0003 255.097 61.0003C195.707 60.9273 139.504 87.942 102.451 134.381L92.4716 146.888L117.485 166.846L127.464 154.339L128.398 153.18C159.377 115.071 205.913 92.9399 255.078 93.0003C345.228 93.0003 418.297 165.904 418.297 255.79V261.283L389.125 233.379L367.006 256.503L435.876 322.379L502.255 256L479.627 233.373L450.297 262.703V255.79L450.271 252.569ZM92.4274 256.16V250.211L122.13 278.622L144.249 255.498L75.3788 189.622L9 256L31.6274 278.628L60.4274 249.827V256.16L60.4536 259.384C62.1766 365.566 148.864 451 255.627 451C314.836 450.915 370.828 424.15 408.064 378.147L418.13 365.71L393.257 345.577L383.191 358.014L382.251 359.164C351.082 396.97 304.653 418.929 255.604 419C165.443 419 92.4274 346.143 92.4274 256.16Z" fill="currentColor"/>
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
