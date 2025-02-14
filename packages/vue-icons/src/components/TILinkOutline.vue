<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M208 142C217.941 142 226 150.059 226 160C226 169.831 218.119 177.821 208.331 177.997L208 178H144C100.922 178 66 212.922 66 256C66 298.647 100.227 333.301 142.71 333.99L144 334H208C217.941 334 226 342.059 226 352C226 361.831 218.119 369.821 208.331 369.997L208 370H144C81.0395 370 30 318.96 30 256C30 193.669 80.0238 143.022 142.115 142.015L144 142H208ZM368 142C430.96 142 482 193.04 482 256C482 318.331 431.976 368.978 369.885 369.985L368 370H304C294.059 370 286 361.941 286 352C286 342.169 293.881 334.179 303.669 334.003L304 334H368C411.078 334 446 299.078 446 256C446 213.353 411.773 178.699 369.29 178.01L368 178H304C294.059 178 286 169.941 286 160C286 150.169 293.881 142.179 303.669 142.003L304 142H368ZM368.71 256C368.71 246.059 360.651 238 350.71 238H163.29L162.959 238.003C153.171 238.179 145.29 246.169 145.29 256C145.29 265.941 153.349 274 163.29 274H350.71L351.041 273.997C360.829 273.821 368.71 265.831 368.71 256Z" fill="currentColor"/>
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
