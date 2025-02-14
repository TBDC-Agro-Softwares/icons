<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M292.939 258.923L307.211 243.477L258.165 106.667H215.499L108.832 405.333H151.499L182.005 320H244.789C259.268 298.473 275.334 278.057 292.853 258.923H292.939ZM236.832 166.4L276.512 277.333H197.237L236.832 166.4Z" fill="currentColor"/>
<path d="M324.299 287.872C324.299 287.872 247.499 371.072 247.499 422.272C247.359 432.498 249.235 442.651 253.019 452.152C256.802 461.652 262.42 470.315 269.552 477.644C283.955 492.447 303.648 500.922 324.299 501.205C344.951 501.488 364.869 493.556 379.672 479.153C387.002 472.021 392.855 463.516 396.897 454.122C400.94 444.729 403.093 434.631 403.233 424.405V422.272C403.233 371.072 324.299 287.872 324.299 287.872Z" fill="currentColor"/>
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
