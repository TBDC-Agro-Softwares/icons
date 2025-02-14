<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="256" height="257" viewBox="0 0 256 257" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M163.456 24.4329C168.08 26.6285 168.747 32.6889 165.128 36.3086L139.165 62.2716C137.167 64.2689 134.271 64.9873 131.463 64.6852C130.325 64.5628 129.17 64.5 128 64.5C110.327 64.5 96 78.8269 96 96.5C96 97.6699 96.0628 98.8252 96.1852 99.9627C96.4873 102.771 95.7689 105.667 93.7716 107.665L68.4005 133.036C64.3834 137.053 57.5756 135.714 55.6617 130.365C50.5665 116.126 48 103.634 48 93C48 50.825 83.89 16.5 128 16.5C140.724 16.5 152.764 19.3561 163.456 24.4329Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M73.8672 169.947L54.1569 189.657C51.0327 192.781 45.9673 192.781 42.8431 189.657C39.719 186.533 39.719 181.467 42.8431 178.343L201.843 19.3431C204.967 16.219 210.033 16.219 213.157 19.3431C216.281 22.4673 216.281 27.5327 213.157 30.6569L194 49.8141C202.829 62.113 208 76.991 208 93C208 113.095 198.845 139.805 180.82 172.39C166.32 198.56 149.53 222.225 140.82 234C137.83 238.081 133.074 240.492 128.015 240.492C122.956 240.492 118.2 238.081 115.21 234C106.485 222.225 89.71 198.56 75.21 172.39C74.7568 171.572 74.3092 170.757 73.8672 169.947ZM117.187 126.627C120.564 127.839 124.205 128.5 128 128.5C145.665 128.481 159.981 114.165 160 96.5C160 92.7051 159.339 89.0644 158.127 85.6868L117.187 126.627Z" fill="currentColor"/>
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
