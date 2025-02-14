<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M172.041 133.464C166.222 126.814 156.114 126.14 149.464 131.959L21.4639 243.959L21.2038 244.191C14.1797 250.606 14.2665 261.743 21.4639 268.041L149.464 380.041L149.739 380.277C156.39 385.841 166.302 385.095 172.041 378.536L172.277 378.261C177.841 371.61 177.095 361.698 170.536 355.959L56.298 256L170.536 156.041L170.806 155.8C177.204 149.946 177.78 140.023 172.041 133.464ZM362.261 131.723C355.61 126.159 345.698 126.905 339.959 133.464L339.723 133.739C334.159 140.39 334.905 150.302 341.464 156.041L455.701 256L341.464 355.959L341.194 356.2C334.797 362.054 334.22 371.977 339.959 378.536C345.778 385.186 355.886 385.86 362.536 380.041L490.536 268.041L490.796 267.809C497.82 261.394 497.734 250.257 490.536 243.959L362.536 131.959L362.261 131.723Z" fill="currentColor"/>
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
