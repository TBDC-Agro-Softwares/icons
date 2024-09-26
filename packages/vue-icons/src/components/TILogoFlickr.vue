<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 32C132.8 32 32 132.8 32 256C32 379.2 132.8 480 256 480C379.2 480 480 379.2 480 256C480 132.8 379.2 32 256 32ZM173.84 312C150.872 312.743 129.781 299.379 120.645 278.293C111.509 257.208 116.182 232.681 132.431 216.431C148.681 200.182 173.208 195.509 194.293 204.645C215.379 213.781 228.743 234.872 228 257.84C227.045 287.347 203.347 311.045 173.84 312ZM341.84 312C318.872 312.743 297.781 299.379 288.645 278.293C279.509 257.208 284.182 232.681 300.431 216.431C316.681 200.182 341.208 195.509 362.293 204.645C383.379 213.781 396.743 234.872 396 257.84C395.045 287.347 371.347 311.045 341.84 312Z" fill="currentColor"/>
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
