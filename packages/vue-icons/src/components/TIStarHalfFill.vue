<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M192.377 192H32.0006L31.5318 192.006C16.154 192.405 10.1149 212.393 22.9522 221.196L152.971 310.351L102.841 458.884L102.698 459.326C98.1958 473.894 114.898 486.008 127.389 476.956L256.001 383.758L384.612 476.956L384.992 477.224C397.566 485.85 414.093 473.5 409.16 458.884L359.03 310.351L489.049 221.196L489.432 220.926C501.889 211.9 495.566 192 480.001 192H319.624L271.217 43.0546C266.427 28.3151 245.574 28.3151 240.784 43.0546L192.377 192ZM256.001 99.765L292.784 212.945L292.896 213.279C295.135 219.687 301.187 224 308.001 224H428.375L330.952 290.804L330.66 291.01C324.965 295.103 322.589 302.446 324.841 309.116L362.82 421.646L265.389 351.044L265.082 350.827C262.349 348.942 259.175 348 256.001 348V99.765Z" fill="currentColor"/>
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
