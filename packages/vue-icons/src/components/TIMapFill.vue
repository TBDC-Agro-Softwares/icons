<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M212.36 39.31C209.903 37.7128 206.769 37.587 204.192 38.9819C201.615 40.3769 200.007 43.0694 200 46V403.56C199.994 406.27 201.36 408.799 203.63 410.28L299.63 472.7C302.089 474.304 305.229 474.432 307.81 473.033C310.392 471.635 312 468.936 312 466V108.67C312.008 105.954 310.637 103.42 308.36 101.94L212.36 39.31ZM48.1702 113.34C38.1457 119.046 31.9678 129.705 32.0002 141.24V438C31.9638 449.247 37.8345 459.687 47.4633 465.499C57.0922 471.312 69.0654 471.642 79.0002 466.37C79.4302 466.14 79.8502 465.9 80.2602 465.63L164.4 410.58C166.67 409.099 168.037 406.57 168.03 403.86V46.45C168.038 43.4799 166.401 40.7497 163.776 39.3589C161.152 37.9681 157.973 38.1456 155.52 39.82L48.1702 113.34ZM433.03 45.59C442.94 40.2617 454.934 40.5968 464.53 46.47C474.267 52.5192 480.134 63.2177 480 74.68V370.68C480.02 382.301 473.738 393.019 463.59 398.68L356.52 472.14C354.067 473.82 350.884 474.001 348.256 472.609C345.628 471.218 343.989 468.483 344 465.51V108.05C343.994 105.34 345.36 102.81 347.63 101.33L431.78 46.33C432.182 46.0584 432.599 45.8113 433.03 45.59Z" fill="currentColor"/>
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
