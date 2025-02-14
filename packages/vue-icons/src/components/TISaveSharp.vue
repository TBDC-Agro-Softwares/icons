<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M380.44 32H64C46.3269 32 32 46.3269 32 64V448C32 465.673 46.3269 480 64 480H448C465.653 479.951 479.951 465.653 480 448V131.56L380.44 32ZM112 176V112H304V176H112ZM335.91 355.76C333.88 398.921 297.945 432.671 254.742 431.992C211.539 431.314 176.681 396.452 176.008 353.249C175.335 310.046 209.089 274.114 252.25 272.09C274.729 271.1 296.589 279.598 312.498 295.509C328.408 311.42 336.902 333.282 335.91 355.76Z" fill="currentColor"/>
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
