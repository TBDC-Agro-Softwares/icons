<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M240 48.0001C240 33.8882 256.892 26.7504 267.009 36.3892L267.314 36.6864L379.314 148.686C385.821 155.193 385.499 165.81 378.678 171.916L378.413 172.148L280.585 256L378.413 339.852C385.4 345.841 385.893 356.451 379.561 363.062L379.314 363.314L267.314 475.314C257.335 485.292 240.344 478.396 240.005 464.426L240 464V290.787L154.413 364.148C147.794 369.821 137.875 369.142 132.088 362.681L131.852 362.413C126.179 355.794 126.859 345.875 133.319 340.087L133.588 339.852L231.414 256L133.588 172.148C126.969 166.475 126.124 156.569 131.623 149.861L131.852 149.587C137.525 142.969 147.432 142.123 154.139 147.622L154.413 147.852L240 221.212V48.0001ZM272 290.788V425.372L344.468 352.904L272 290.788ZM272 86.6271V221.211L344.468 159.095L272 86.6271Z" fill="currentColor"/>
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
