<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.0356 336.01H336.036C341.709 336.001 346.953 332.99 349.819 328.094C352.685 323.198 352.745 317.151 349.976 312.2L197.976 40.2001C195.149 35.1372 189.804 32 184.006 32C178.207 32 172.862 35.1372 170.036 40.2001L18.0356 312.2C15.2613 317.161 15.3268 323.22 18.2076 328.12C21.0884 333.019 26.3521 336.023 32.0356 336.01ZM303.466 163.33C314.181 161.12 325.094 160.008 336.036 160.01C418.115 160.03 486.866 222.157 495.174 303.814C503.483 385.472 448.653 460.172 368.26 476.723C287.868 493.275 207.989 446.309 183.366 368.01H336.036C353.062 368.009 368.814 358.987 377.431 344.301C386.048 329.616 386.24 311.465 377.936 296.6L303.466 163.33Z" fill="currentColor"/>
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
