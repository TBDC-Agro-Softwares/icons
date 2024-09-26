<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M456 192L300 180L323 90.6C329 64 322.22 48.73 300.53 42L265.84 32.15C264.155 31.7035 262.375 32.3993 261.44 33.87L132.44 236.21C130.985 238.576 128.407 240.018 125.63 240.02H16V448H133.61C138.769 447.999 143.895 448.83 148.79 450.46L225.09 475.89C233.248 478.611 241.791 479.999 250.39 480H428.32C447.32 480 459.82 466.48 463.55 447.84L496 305.58V232C496 209.94 478 194 456 192Z" fill="currentColor"/>
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
