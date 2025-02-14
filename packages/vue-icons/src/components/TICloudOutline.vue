<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 80C219.644 80 187.29 92.0853 161.321 113.801L160.594 114.413C140.778 131.202 125.509 153.1 116.329 176.818L116.103 177.404L115.267 177.539C85.5726 182.367 58.8788 194.385 38.7176 212.775C13.7476 235.551 0 266.861 0 304C0 377.682 59.8185 432 136 432H396C464.405 432 512 394.108 512 328C512 295.045 498.108 268.253 473.844 249.698L473.161 249.18C456.705 236.803 436.17 228.745 415.001 225.482L414.232 225.365L414.091 224.469C399.857 137.627 336.008 80 256 80ZM256 112C322.659 112 375.214 161.963 383.831 239.231L384.078 241.581C384.859 249.449 391.271 255.567 399.168 255.978C419.322 257.028 439.623 263.813 454.406 275.117C470.927 287.751 480 305.25 480 328C480 352.235 471.801 370.137 456.659 382.193C442.112 393.774 420.963 400 396 400H136C76.8398 400 32 359.283 32 304C32 275.836 41.9765 253.115 60.2824 236.417C77.5624 220.656 101.986 210.681 129.592 207.921C136.016 207.278 141.425 202.838 143.306 196.662C150.058 174.496 163.615 153.597 181.849 138.349C202.139 121.382 227.256 112 256 112Z" fill="currentColor"/>
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
