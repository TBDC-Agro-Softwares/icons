<template>
  <svg :class="className" :style="color ? `color: ${color} !important` : undefined" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M414.39 97.61C357.896 40.5575 275.188 18.1048 197.6 38.7581C120.011 59.4114 59.4112 120.012 38.7579 197.6C18.1045 275.188 40.5572 357.896 97.6097 414.39C154.103 471.443 236.811 493.895 314.4 473.242C391.988 452.589 452.588 391.988 473.242 314.4C493.895 236.812 471.442 154.104 414.39 97.61ZM184 208C197.255 208 208 218.745 208 232C208 245.255 197.255 256 184 256C170.745 256 160 245.255 160 232C159.984 225.63 162.507 219.516 167.012 215.012C171.516 210.507 177.63 207.984 184 208ZM351.67 314.17C339.67 354.47 301.47 384 256.05 384C210.63 384 172.43 354.47 160.33 314.17C159.644 311.737 160.148 309.122 161.691 307.119C163.233 305.115 165.632 303.959 168.16 304H343.85C346.376 303.962 348.772 305.12 350.312 307.123C351.852 309.126 352.355 311.738 351.67 314.17ZM328 256C314.745 256 304 245.255 304 232C304 218.745 314.745 208 328 208C341.255 208 352 218.745 352 232C352.016 238.37 349.492 244.484 344.988 248.988C340.484 253.493 334.37 256.016 328 256Z" fill="currentColor"/>
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
