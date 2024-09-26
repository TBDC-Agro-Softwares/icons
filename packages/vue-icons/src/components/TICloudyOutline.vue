<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M253.606 80.0173C175.557 81.1481 112.771 137.551 98.1788 222.817L97.757 225.374L97.8076 225.367C73.2045 229.031 49.9108 238.956 32.3855 254.445C11.635 272.785 0 297.851 0 328C0 394.108 47.5953 432 116 432H376C452.182 432 512 377.682 512 304C512 235.28 464.615 188.282 395.96 177.378C395.92 177.372 395.887 177.345 395.873 177.308C385.828 151.131 368.56 127.408 346.056 110.082C320.857 90.6818 290.187 80 256 80L253.606 80.0173ZM256 112C283.044 112 306.87 120.298 326.534 135.438C344.033 148.91 357.646 167.468 365.656 187.892L365.982 188.732C370.057 199.439 379.583 207.179 390.941 208.982C416.584 213.055 438.794 223.482 454.424 238.984C471.008 255.432 480 277.256 480 304C480 359.283 435.16 400 376 400H116C91.0372 400 69.8877 393.774 55.3406 382.193C40.1986 370.137 32 352.235 32 328C32 307.156 39.605 290.771 53.577 278.422C65.9734 267.466 83.1885 260.045 101.682 257.146L102.537 257.015C116.178 254.97 126.939 244.424 129.281 230.879L129.351 230.455C140.823 158.065 192.13 112 256 112Z" fill="currentColor"/>
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
