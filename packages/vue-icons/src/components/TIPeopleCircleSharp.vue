<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M256 48C141.31 48 48 141.31 48 256C48 370.69 141.31 464 256 464C370.69 464 464 370.69 464 256C464 141.31 370.69 48 256 48ZM325.3 144.17C365.328 144.225 397.737 176.709 397.7 216.737C397.663 256.764 365.194 289.188 325.167 289.17C285.139 289.152 252.7 256.698 252.7 216.67C252.713 197.429 260.37 178.98 273.985 165.384C287.6 151.788 306.059 144.157 325.3 144.17ZM170.2 170.53C202.951 170.574 229.469 197.152 229.44 229.903C229.411 262.654 202.844 289.185 170.093 289.17C137.342 289.155 110.8 262.601 110.8 229.85C110.808 214.106 117.071 199.01 128.211 187.885C139.352 176.76 154.456 170.517 170.2 170.53ZM94.35 325.53C118.85 312.24 150.22 305.59 170.2 305.59C185.2 305.59 204.52 308.59 223.53 315.79C210.787 322.901 199.3 332.06 189.53 342.9C176.34 357.9 168.77 375.82 168.77 393.73V408.73C135.649 389.759 109.546 360.594 94.35 325.58V325.53ZM256 432C235.752 432.017 215.654 428.522 196.6 421.67V394.62C196.6 342.03 282.35 315.53 325.3 315.53C348.3 315.53 383.68 323.16 411.51 338.34C380.992 395.925 321.172 431.954 256 432Z" fill="currentColor"/>
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
