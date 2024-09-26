<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M170.056 40.1949L18.0561 312.195C12.0961 322.86 19.8057 336 32.0231 336H176.823C183.379 401.449 229.68 456.948 294.228 474.415C363.976 493.29 437.72 463.075 474.171 400.686C510.623 338.298 500.736 259.22 450.046 207.727C403.264 160.203 332.443 147.06 272.314 173.195L197.99 40.1949C191.884 29.2684 176.162 29.2684 170.056 40.1949ZM288.022 201.305L349.99 312.195C355.95 322.86 348.241 336 336.023 336H209.025C215.431 386.959 252.006 429.838 302.587 443.526C358.386 458.626 417.38 434.454 446.542 384.543C475.703 334.632 467.794 271.37 427.242 230.175C390.583 192.935 335.472 182.084 288.022 201.305ZM184.023 80.799L308.752 304H59.2931L184.023 80.799Z" fill="currentColor"/>
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
